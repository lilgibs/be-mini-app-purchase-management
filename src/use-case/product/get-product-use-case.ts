import { ProductSequelizeRepository } from "../../infrastructure/database/repositories/product/product-sequelize-repository"

export default class GetProductUseCase {
  private sequelizeRepository: ProductSequelizeRepository

  constructor(sequelizeRepository: ProductSequelizeRepository) {
    this.sequelizeRepository = sequelizeRepository
  }

  async execute(props: { page?: number, limit?: number, q?: string }) {
    const isLimitOverflow = props.limit && props.limit > 20 ? 20 : props.limit
    return await this.sequelizeRepository.getProducts({ ...props, limit: isLimitOverflow })
  }
}