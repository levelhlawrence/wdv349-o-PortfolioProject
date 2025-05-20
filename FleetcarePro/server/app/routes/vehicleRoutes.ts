import express from "express";
import {
  getAllVehicles,
  getVehiclesById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} from "../controllers/vehicleController";

const vehicleRouter = express.Router();

// @GET ALL USERS
vehicleRouter.get("/", getAllVehicles);

// @GET VEHICLE BY ID
vehicleRouter.get("/:id", getVehiclesById);

// @POST VEHICLE
vehicleRouter.post("/", createVehicle);

// // @UPDATE VEHICLE
// vehicleRouter.put("/:id", updateVehicle);

// // @DELETE VEHICLE
// vehicleRouter.delete("/:id", deleteVehicle);

export { vehicleRouter };
