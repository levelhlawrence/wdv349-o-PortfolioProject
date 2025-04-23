import express from "express";
import {
  getAllWorkOrders,
  createWorkOrders,
} from "../controllers/workorderController";

const workOrderRouter = express.Router();

// @GET ALL USERS
workOrderRouter.get("/", getAllWorkOrders);

// POST NEW WORKORDER
workOrderRouter.post("/", createWorkOrders);

export default workOrderRouter;
