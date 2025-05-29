import express from "express";
import {
  getAllVehicles,
  getVehiclesById,
  createVehicle,
  updateVehicleById,
  deleteVehicle,
} from "../controllers/vehicleController";

const vehicleRouter = express.Router();

// @GET ALL VEHICLES
vehicleRouter.get("/", getAllVehicles);

// @GET VEHICLE BY ID
vehicleRouter.get("/:id", getVehiclesById);

// @POST CREATE VEHICLE
vehicleRouter.post("/", createVehicle);

// @PUT UPDATE VEHICLE
vehicleRouter.put("/:id", updateVehicleById);

// @DELETE VEHICLE
vehicleRouter.delete("/:id", deleteVehicle);

export { vehicleRouter };
