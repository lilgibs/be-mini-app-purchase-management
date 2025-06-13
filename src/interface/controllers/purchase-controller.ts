import { NextFunction, Request, Response } from "express";
import GetPurchaseUseCase from "../../use-case/purchase/get-purchase-use-case";
import CreatePurchaseUseCase from "../../use-case/purchase/create-purchase";
import UpdatePurchaseStatusUseCase from "../../use-case/purchase/update-purchase-status";
import { PurchaseSequelizeRepository } from "../../infrastructure/database/repositories/purchase/pruchase-sequelize-repository";
import { queryNumberValidation, queryStringValidation } from "../../utils/query-validation";

const sequelizeRepository = new PurchaseSequelizeRepository();

const getPurchaseUseCase = new GetPurchaseUseCase(sequelizeRepository);
const createPurchaseUseCase = new CreatePurchaseUseCase(sequelizeRepository);
const updatePurchaseStatusUseCase = new UpdatePurchaseStatusUseCase(sequelizeRepository);


export const getPurchases = async (req: Request, res: Response) => {
  try {
    const page = queryNumberValidation(req.query.page);
    const limit = queryNumberValidation(req.query.limit);
    const q = queryStringValidation(req.query.q);

    const result = await getPurchaseUseCase.execute({ page, limit, q });

    return res.status(200).json({
      message: "Purchases fetched successfully",
      data: result.data,
      pagination: result.pagination,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch purchases", error });
  }
};


export const createPurchase = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { productId, quantity } = req.body;

    const result = await createPurchaseUseCase.execute({
      productId,
      quantity,
    });

    return res.status(201).json({
      message: "Purchase created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const updatePurchaseStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const purchaseId = req.params.id;
    const { status } = req.body;

    const result = await updatePurchaseStatusUseCase.execute(purchaseId, status);

    return res.status(200).json({
      message: "Purchase status updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
