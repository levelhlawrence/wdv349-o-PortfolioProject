import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import database from "./database/database";

// Import routes here
import userRoutes from "./routes/userRoutes";
import vehicleRouter from "./routes/vehicleRoutes";
import facilityRoutes from "./routes/facilityRoutes";

// Setup
const app: express.Express = express();
const PORT: number = Number(process.env.PORT);

// Database connection
database();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// API Routes
app.use("/api_v1/users", userRoutes);
app.use("/api_v1/vehicles", vehicleRouter);
app.use("/api_v1/facilities", facilityRoutes);

// Example route
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello, World!</h1>");
});

export { app, PORT };
