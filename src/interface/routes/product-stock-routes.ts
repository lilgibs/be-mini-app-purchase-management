import { Router } from "express";
import { asyncWrapper } from "../../utils/asyncWrapper";
import { getProductStocks } from "../controllers/product-stock-controller";

export class ProductStockRoutes {
  public readonly route = "/product-stocks";

  public setupRoutes(router: Router) {
    router.get(
      this.route, asyncWrapper(getProductStocks)
    );
  }
}