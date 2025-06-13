import { DataTypes, Model, CreationOptional, InferAttributes, InferCreationAttributes, ForeignKey } from "sequelize";
import { sequelize } from "../../../config/db";
import { Product } from "../product/product";

export class Purchase extends Model<
  InferAttributes<Purchase>,
  InferCreationAttributes<Purchase>
> {
  declare id?: string;
  declare productId: ForeignKey<Product["id"]>;
  declare quantity: number;
  declare status: "waiting_for_payment" | "completed" | "canceled";
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date> | null;
  declare deletedAt: CreationOptional<Date> | null;
}

Purchase.init(
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
    status: {
      type: DataTypes.ENUM("waiting_for_payment", "completed", "canceled"),
      allowNull: true,
      defaultValue: "waiting_for_payment",
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "purchase",
    tableName: "purchases",
    underscored: true,
    timestamps: true,
    paranoid: true,
  }
);
