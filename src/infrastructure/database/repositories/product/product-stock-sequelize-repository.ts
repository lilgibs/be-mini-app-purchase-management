import { IDefaultResponseProps } from "../../../../domain/models/default-response";
import { IPaginationProps } from "../../../../domain/models/pagination";
import { IProductStockProps, ProductStockEntity } from "../../../../domain/models/product/product-stock";
import { Op } from "../../../config/db";
import { Product, ProductStock } from "../../models";

export class ProductStockSequelizeRepository {

  async getProductStocks(props: { page?: number, limit?: number, q?: string }): Promise<IDefaultResponseProps<IProductStockProps[]>> {
    const { page, limit, q } = props

    const productStocks = await ProductStock.findAndCountAll({
      limit,
      offset: (page && limit) ? (page - 1) * limit : undefined,
      include: [{
        model: Product,
        as: 'product',
        ...(q && {
          where: {
            name: { [Op.like]: `%${q}%` },
          }
        }),
        required: true
      }]
    });

    let pagination: IPaginationProps = {
      page: 1,
      limit: 10,
      totalPage: 1,
      totalDisplayedRows: 0,
      totalRows: productStocks.count,
      nextPage: null,
      prevPage: null
    }

    if (page && limit) {
      pagination.page = page || 1;
      pagination.limit = limit || 10;
      pagination.totalPage = Math.ceil(productStocks.count / limit);
      pagination.totalDisplayedRows = ((page - 1) * limit) + productStocks.rows.length;
      pagination.nextPage = page !== pagination.totalPage ? page + 1 : null;
      pagination.prevPage = page !== 1 ? page - 1 : null;
    }

    const data = productStocks.rows.map((val) =>
      ProductStockEntity.create(val.toJSON()).unmarshall()
    );

    return { data, pagination }
  }
}