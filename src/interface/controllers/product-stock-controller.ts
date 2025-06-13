import { Request, Response } from "express";
import { queryNumberValidation, queryStringValidation } from "../../utils/query-validation";
import GetProductStocksUseCase from "../../use-case/product/get-product-stocks-use-case";
import { ProductStockSequelizeRepository } from "../../infrastructure/database/repositories/product/product-stock-sequelize-repository";

const sequelizeRepository = new ProductStockSequelizeRepository()

const getProductStockUseCase = new GetProductStocksUseCase(sequelizeRepository)

export const getProductStocks = async (req: Request, res: Response) => {
  try {

    const page = queryNumberValidation(req.query.page);
    const limit = queryNumberValidation(req.query.limit);
    const q = queryStringValidation(req.query.q);

    const productStocks = await getProductStockUseCase.execute({
      page: page,
      limit: limit,
      q: q
    })
    return res.status(200).json({
      message: "Product Stocks fetched successfully",
      data: productStocks.data,
      pagination: productStocks.pagination
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}