import { Request, Response } from "express";
import { ProductSequelizeRepository } from "../../infrastructure/database/repositories/product/product-sequelize-repository";
import GetProductUseCase from "../../use-case/product/get-product-use-case";
import { queryNumberValidation, queryStringValidation } from "../../utils/query-validation";

const sequelizeRepository = new ProductSequelizeRepository()

const getProductUseCase = new GetProductUseCase(sequelizeRepository)

export const getProducts = async (req: Request, res: Response) => {
  try {

    const page = queryNumberValidation(req.query.page);
    const limit = queryNumberValidation(req.query.limit);
    const q = queryStringValidation(req.query.q);

    const products = await getProductUseCase.execute({
      page: page,
      limit: limit,
      q: q
    })
    return res.status(200).json({
      message: "Products fetched successfully",
      data: products.data,
      pagination: products.pagination
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}