import { DataTypes, Model, CreationOptional, InferAttributes, InferCreationAttributes, ForeignKey } from "sequelize";
import { sequelize } from "../../../config/db";
import { Product } from "./product";
import { IProductStockProps } from "../../../../domain/models/product/product-stock";

export class ProductStock extends Model<
  InferAttributes<ProductStock>,
  InferCreationAttributes<ProductStock>
> implements IProductStockProps {
  declare id?: string;
  declare productId: ForeignKey<Product["id"]>;
  declare quantity: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date> | null;
  declare deletedAt: CreationOptional<Date> | null;
}

ProductStock.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "product_id",
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "productStock",
    tableName: "product_stocks",
    underscored: true,
    timestamps: true,
    paranoid: true,
  }
);
