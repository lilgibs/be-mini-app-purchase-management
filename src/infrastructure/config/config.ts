import dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/../../../.env` });

export const dbConfig = {
  dbName: process.env["DATABASE_NAME"] || "db_local",
  dbUsername: process.env["DATABASE_USERNAME"] || "root",
  dbPassword: process.env["DATABASE_PASSWORD"],
  config: {
    dialect: process.env["DATABASE_DIALECT"] || "mysql",
    port: Number(process.env["DATABASE_PORT"]) || 3306,
    host: process.env["DATABASE_HOST"] || "localhost",
  },
};

export const appConfig = {
  jwtSecret: process.env["JWT_SECRET"] || "joe",
}
