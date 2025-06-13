import { Router } from "express";
import { ProductRoutes } from "./product-routes";
import { ProductStockRoutes } from "./product-stock-routes";
import { PurchaseRoutes } from "./purchase-routes";


export class Routes {
  private productRoutes: ProductRoutes
  private productStockRoutes: ProductStockRoutes
  private purchaseRoutes: PurchaseRoutes

  constructor() {
    this.productRoutes = new ProductRoutes();
    this.productStockRoutes = new ProductStockRoutes();
    this.purchaseRoutes = new PurchaseRoutes();
  }

  setupRoutes(router: Router) {
    this.productRoutes.setupRoutes(router);
    this.productStockRoutes.setupRoutes(router);
    this.purchaseRoutes.setupRoutes(router);
  }
}



