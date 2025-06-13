import { Product } from "./product/product";
import { ProductStock } from "./product/product-stock";
import { Purchase } from "./purchase/purchase";

// Model Assosiation
Product.hasOne(ProductStock, {
  foreignKey: "productId",
  as: "stock",
});

ProductStock.belongsTo(Product, {
  foreignKey: "productId",
  as: "product",
});

Product.hasMany(Purchase, {
  foreignKey: "productId",
  as: "pruchases",
});

Purchase.belongsTo(Product, {
  foreignKey: "productId",
  as: "product",
});

export {
  Product,
  ProductStock,
  Purchase,
}