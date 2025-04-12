import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import database from "./database/database";

// Import routes here
import userRoutes from "./routes/userRoutes";
import vehicleRouter from "./routes/vehicleRoutes";

// Setup
const app: express.Express = express();
const PORT: number = Number(process.env.PORT);

// Database connection
database();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api_v1/users", userRoutes);
app.use("/api_v1/vehicles", vehicleRouter);

// Example route
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello, World!</h1>");
});

export { app, PORT };
