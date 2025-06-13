import { IDefaultResponseProps } from "../../../../domain/models/default-response";
import { IPaginationProps } from "../../../../domain/models/pagination";
import { IPurchaseProps, PurchaseEntity } from "../../../../domain/models/purchase/purchase";
import { CustomError } from "../../../../utils/custom-error";
import { Op, sequelize } from "../../../config/db";
import { Product, Purchase } from "../../models";
import { v4 as uuidv4 } from "uuid";

export class PurchaseSequelizeRepository {

  async createPurchase(data: {
    productId: string;
    quantity: number;
  }): Promise<IPurchaseProps> {
    const transaction = await sequelize.transaction();

    try {
      const product = await Product.findByPk(data.productId, { transaction });

      if (!product) {
        throw new CustomError(404, "Failed to create purchase. Product not found!");
      }

      const purchase = await Purchase.create({
        id: uuidv4(),
        productId: data.productId,
        quantity: data.quantity,
      }, { transaction });

      await transaction.commit();

      return PurchaseEntity.create(purchase.toJSON()).unmarshall();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async getPurchases(page?: number, limit?: number, q?: string): Promise<IDefaultResponseProps<IPurchaseProps[]>> {
    const categories = await Purchase.findAndCountAll({
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
      PurchaseEntity.create(category.toJSON()).unmarshall()
    );

    return { data, pagination }
  }

  async updatePurchaseStatus(purchaseId: string, newStatus: "waiting_for_payment" | "completed" | "canceled"): Promise<IPurchaseProps | null> {
    const transaction = await sequelize.transaction();
    try {

      const purchase = await Purchase.findByPk(purchaseId, {
        include: [{ model: Product, as: "product" }],
      });

      if (!purchase) {
        throw new CustomError(404, "Failed to update purchase. Purchase not found!");
      }

      if (!purchase) return null;

      purchase.status = newStatus;
      await purchase.save();

      await transaction.commit();

      return PurchaseEntity.create(purchase.toJSON()).unmarshall();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

