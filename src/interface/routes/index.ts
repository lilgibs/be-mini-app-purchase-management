import { Router } from "express";
import { ProductRoutes } from "./product-routes";
import { ProductStockRoutes } from "./product-stock-routes";


export class Routes {
  private productRoutes: ProductRoutes
  private productStockRoutes: ProductStockRoutes

  constructor() {
    this.productRoutes = new ProductRoutes();
    this.productStockRoutes = new ProductStockRoutes();
  }

  setupRoutes(router: Router) {
    this.productRoutes.setupRoutes(router);
    this.productStockRoutes.setupRoutes(router);
  }
}



