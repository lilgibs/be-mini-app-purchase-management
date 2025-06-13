import { IDefaultResponseProps } from "../../../../domain/models/default-response";
import { IPaginationProps } from "../../../../domain/models/pagination";
import { IProductProps, ProductEntity } from "../../../../domain/models/product/product";
import { Op } from "../../../config/db";
import { Product } from "../../models";

export class ProductSequelizeRepository {

  async getProducts(props: { page?: number, limit?: number, q?: string }): Promise<IDefaultResponseProps<IProductProps[]>> {
    const { page, limit, q } = props

    const categories = await Product.findAndCountAll({
      limit,
      offset: (page && limit) ? (page - 1) * limit : undefined,
      ...(q && {
        where: {
          name: { [Op.like]: `%${q}%` },
        }
      })
    });

    let pagination: IPaginationProps = {
      page: 1,
      limit: 10,
      totalPage: 1,
      totalDisplayedRows: 0,
      totalRows: categories.count,
      nextPage: null,
      prevPage: null
    }

    if (page && limit) {
      pagination.page = page || 1;
      pagination.limit = limit || 10;
      pagination.totalPage = Math.ceil(categories.count / limit);
      pagination.totalDisplayedRows = ((page - 1) * limit) + categories.rows.length;
      pagination.nextPage = page !== pagination.totalPage ? page + 1 : null;
      pagination.prevPage = page !== 1 ? page - 1 : null;
    }

    const data = categories.rows.map((category) =>
      ProductEntity.create(category.toJSON()).unmarshall()
    );

    return { data, pagination }
  }
}