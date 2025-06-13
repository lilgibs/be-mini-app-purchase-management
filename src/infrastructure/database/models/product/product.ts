import { DataTypes, Model, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { sequelize } from "../../../config/db";
import { IProductProps } from "../../../../domain/models/product/product";

export class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> implements IProductProps {
  declare id?: string;
  declare name: string;
  declare price: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date> | null;
  declare deletedAt: CreationOptional<Date> | null;
}

Product.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
},
  {
    sequelize,
    modelName: "product",
    tableName: "products",
    underscored: true,
    timestamps: true,
    paranoid: true,
  }
)