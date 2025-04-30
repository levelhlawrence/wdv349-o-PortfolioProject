import express from "express";
import {
  getAllWorkOrders,
  createWorkOrders,
  getWorkOrderById,
} from "../controllers/workorderController";

const workOrderRouter = express.Router();

// @GET ALL USERS
workOrderRouter.get("/", getAllWorkOrders);

// @GET WORK ORDER BY ID
workOrderRouter.get("/:id", getWorkOrderById);

// @POST NEW WORK ORDER
workOrderRouter.post("/", createWorkOrders);

export default workOrderRouter;
