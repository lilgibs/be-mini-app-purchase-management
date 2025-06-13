import { IPurchaseProps } from "../../domain/models/purchase/purchase";
import { PurchaseSequelizeRepository } from "../../infrastructure/database/repositories/purchase/pruchase-sequelize-repository";

export default class CreatePurchaseUseCase {
  private sequelizeRepository: PurchaseSequelizeRepository;

  constructor(sequelizeRepository: PurchaseSequelizeRepository) {
    this.sequelizeRepository = sequelizeRepository;
  }

  async execute(data: {
    productId: string;
    quantity: number;
  }): Promise<IPurchaseProps> {
    return await this.sequelizeRepository.createPurchase(data);
  }
}
