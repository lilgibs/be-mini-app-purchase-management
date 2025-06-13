import { Router } from "express";
import { getProducts } from "../controllers/product-controller";
import { asyncWrapper } from "../../utils/asyncWrapper";

export class ProductRoutes {
  public readonly route = "/products";

  public setupRoutes(router: Router) {
    router.get(
      this.route, asyncWrapper(getProducts)
    );
  }
}