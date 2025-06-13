import { PurchaseSequelizeRepository } from "../../infrastructure/database/repositories/purchase/pruchase-sequelize-repository";

export default class GetPurchaseUseCase {
  private sequelizeRepository: PurchaseSequelizeRepository;

  constructor(sequelizeRepository: PurchaseSequelizeRepository) {
    this.sequelizeRepository = sequelizeRepository;
  }

  async execute(props: { page?: number; limit?: number; q?: string }) {
    const isLimitOverflow = props.limit && props.limit > 20 ? 20 : props.limit;
    return await this.sequelizeRepository.getPurchases(props.page, isLimitOverflow, props.q);
  }
}
