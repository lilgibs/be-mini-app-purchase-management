import { Product } from "./product/product";
import { ProductStock } from "./product/product-stock";

// Model Assosiation
Product.hasOne(ProductStock, {
  foreignKey: "productId",
  as: "stocks",
});

ProductStock.belongsTo(Product, {
  foreignKey: "productId",
  as: "product",
});

export {
  Product,
  ProductStock,
}