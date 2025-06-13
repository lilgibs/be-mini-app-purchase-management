import { Router } from "express";
import {
  getPurchases,
  createPurchase,
  updatePurchaseStatus
} from "../controllers/purchase-controller";
import { asyncWrapper } from "../../utils/asyncWrapper";

export class PurchaseRoutes {
  public readonly route = "/purchases";

  public setupRoutes(router: Router) {
    router.get(
      this.route,
      asyncWrapper(getPurchases)
    );

    router.post(
      this.route,
      asyncWrapper(createPurchase)
    );

    router.patch(
      `${this.route}/:id/status`,
      asyncWrapper(updatePurchaseStatus)
    );
  }
}
