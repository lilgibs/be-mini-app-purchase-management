import express, { Router } from "express";
import cors from "cors";
import { sequelize } from "./infrastructure/config/db";
import { Routes } from "./interface/routes";
// import userRoutes from "./interfaces/http/routes/userRoutes";
// import "./infrastructure/database/models/product/product";
// import "./infrastructure/database/models/product/product-stock";
// import "./infrastructure/database/models/purchase/purchase";

const app = express();
const router = Router()

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const routes = new Routes()
routes.setupRoutes(router)
app.use("/api", router);

// Global error handler (optional)
app.use((err: any, req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

// Port
const PORT = process.env.APP_PORT || 3000;

// Start the app
const startApp = async () => {
  try {
    await sequelize.authenticate();
    // console.log("📄 Registered models:", sequelize.models);
    // await sequelize.sync({ alter: true });
    console.log("✅ Connected to MySQL");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to DB", err);
    process.exit(1);
  }
};

startApp();
