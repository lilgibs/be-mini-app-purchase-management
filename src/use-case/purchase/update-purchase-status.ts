import { IPurchaseProps } from "../../domain/models/purchase/purchase";
import { PurchaseSequelizeRepository } from "../../infrastructure/database/repositories/purchase/pruchase-sequelize-repository";

export default class UpdatePurchaseStatusUseCase {
  private sequelizeRepository: PurchaseSequelizeRepository;

  constructor(sequelizeRepository: PurchaseSequelizeRepository) {
    this.sequelizeRepository = sequelizeRepository;
  }

  async execute(
    purchaseId: string,
    newStatus: "waiting_for_payment" | "completed" | "canceled"
  ): Promise<IPurchaseProps | null> {
    return await this.sequelizeRepository.updatePurchaseStatus(purchaseId, newStatus);
  }
}
