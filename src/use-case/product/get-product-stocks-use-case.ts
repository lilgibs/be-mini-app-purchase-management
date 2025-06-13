import { ProductStockSequelizeRepository } from "../../infrastructure/database/repositories/product/product-stock-sequelize-repository"

export default class GetProductStocksUseCase {
  private sequelizeRepository: ProductStockSequelizeRepository

  constructor(sequelizeRepository: ProductStockSequelizeRepository) {
    this.sequelizeRepository = sequelizeRepository
  }

  async execute(props: { page?: number, limit?: number, q?: string }) {
    const isLimitOverflow = props.limit && props.limit > 20 ? 20 : props.limit
    return await this.sequelizeRepository.getProductStocks({ ...props, limit: isLimitOverflow })
  }
}