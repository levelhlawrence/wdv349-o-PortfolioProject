import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import session from "express-session";
import passport from "passport";
import { sequelize } from "../app/database/database";
import configurePassport from "../app/middleware/passport-config";
import isAuthenticated from "../app/middleware/isAuthenticated";
import authRouter from "../app/routes/authRoutes";
// Import routes here
import { vehicleRouter } from "../app/routes/vehicleRoutes";
import { workOrderRouter } from "../app/routes/workorderRoutes";

// <----------- Setup Express App ------------> //
const app: express.Express = express();
const PORT: number = Number(process.env.PORT) || 3000;

// <---------- Database Connection -----------> //

sequelize.sync({ force: false }).then(() => {
  console.log("Database connected");
});

// <---------- Middleware -----------> //
const allowedOrigins = [
  "https://fleetcare-frontend.onrender.com",
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use(
  session({
    name: "connect.sid",
    secret: process.env.SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());

configurePassport(passport);

// <---------- API Routes -----------> //
app.use("/api_v1/workorders", isAuthenticated, workOrderRouter);
app.use("/api_v1/vehicles", isAuthenticated, vehicleRouter);
app.use("/api_v1/auth", authRouter);

// <----------- ENTER ROUTE -----------> //
app.get("/", (_req, res) => {
  res.redirect("http://localhost:5173");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
