import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import { sequelize } from "../app/database/database";

// Import routes here
// import userRoutes from "./routes/userRoutes";
import { vehicleRouter } from "../app/routes/vehicleRoutes";
// import facilityRoutes from "./routes/facilityRoutes";
import { workOrderRouter } from "../app/routes/workorderRoutes";

// <----------- Setup Express App ------------> //
const app: express.Express = express();
const PORT: number = Number(process.env.PORT) || 3000;

// <---------- Middleware -----------> //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const allowedOrigins = [
  "https://fleetcare-frontend.onrender.com",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// <---------- Database Connection -----------> //

sequelize.sync({ force: false }).then(() => {
  console.log("Database connected");
});

// <---------- API Routes -----------> //
// app.use("/api_v1/facilities", facilityRoutes);
app.use("/api_v1/workorders", workOrderRouter);
// app.use("/api_v1/users", userRoutes);
app.use("/api_v1/vehicles", vehicleRouter);

// <----------- ENTER ROUTE -----------> //
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello, World!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
