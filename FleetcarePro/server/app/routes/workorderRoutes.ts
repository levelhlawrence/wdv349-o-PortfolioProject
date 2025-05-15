import express from "express";
const workOrderRouter = express.Router();

import {
  createWorkOrders,
  getAllWorkOrders,
  getWorkOrderById,
  updateWorkOrder,
  deleteWorkOrder,
} from "../controllers/workorderController";

// @GET ALL USERS
workOrderRouter.get("/", getAllWorkOrders);

// @GET WORK ORDER BY ID
workOrderRouter.get("/:id", getWorkOrderById);

// @POST NEW WORK ORDER
workOrderRouter.post("/", createWorkOrders);

// @PUT WORK ORDER
workOrderRouter.put("/:id", updateWorkOrder);

// @DELETE WORK ORDER
workOrderRouter.delete("/:id", deleteWorkOrder);

export { workOrderRouter };
