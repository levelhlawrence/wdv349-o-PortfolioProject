import express from "express";
import {
  getAllVehicles,
  getVehiclesById,
} from "../controllers/vehicleController";

const vehicleRouter = express.Router();

// @GET ALL USERS
vehicleRouter.get("/", getAllVehicles);

// @GET VEHICLE BY ID
vehicleRouter.get("/:id", getVehiclesById);

export default vehicleRouter;
