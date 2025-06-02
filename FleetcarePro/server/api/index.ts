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
configurePassport(passport);

const allowedOrigins = [
  "https://fleetcare-frontend.onrender.com",
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.set("trust proxy", 1);

app.use(express.json());
app.use(
  session({
    name: "connect.sid",
    secret: process.env.SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());

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
