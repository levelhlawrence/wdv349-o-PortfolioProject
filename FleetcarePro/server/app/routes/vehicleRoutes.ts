import express from "express";
import {
  getAllVehicles,
  getVehiclesById,
  createVehicle,
  updateVehicleById,
  deleteVehicle,
} from "../controllers/vehicleController";

const vehicleRouter = express.Router();

// @GET ALL USERS
vehicleRouter.get("/", getAllVehicles);

// @GET VEHICLE BY ID
vehicleRouter.get("/:id", getVehiclesById);

// @POST VEHICLE
vehicleRouter.post("/", createVehicle);

// @UPDATE VEHICLE BY ID
vehicleRouter.put("/:id", updateVehicleById);

// @DELETE VEHICLE
vehicleRouter.delete("/:id", deleteVehicle);

export { vehicleRouter };
