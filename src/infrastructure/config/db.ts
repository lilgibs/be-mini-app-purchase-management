import { Dialect, DataTypes, Sequelize, Model, InferAttributes, InferCreationAttributes, CreationOptional, Op, ForeignKey } from "sequelize";
import { dbConfig } from "./config";

const sequelize = new Sequelize(
  dbConfig.dbName,
  dbConfig.dbUsername,
  dbConfig.dbPassword,
  {
    host: dbConfig.config.host,
    dialect: <Dialect>dbConfig.config.dialect,
    port: Number(dbConfig.config.port || 3306),
  }
);

export {
  sequelize,
  DataTypes,
  Sequelize,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
  Op
}