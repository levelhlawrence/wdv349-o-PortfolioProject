import express from "express";
import { getAllVehicles } from "../controllers/vehicleController";

const vehicleRouter = express.Router();

// @GET ALL USERS
vehicleRouter.get("/", getAllVehicles);

export default vehicleRouter;
