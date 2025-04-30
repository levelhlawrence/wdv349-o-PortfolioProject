import { Request, Response } from "express";
import WorkOrder from "../models/workorder";
import { v4 as uuidv4 } from "uuid";

// @GET ALL WORK ORDERS
const getAllWorkOrders = async (req: Request, res: Response) => {
  try {
    const allWorkorders = await WorkOrder.find()
      .populate("vehicle")
      .populate("facility")
      .populate("technician");

    res.status(200).json({ w_o: allWorkorders });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// @GET WORK ORDER BY ID
const getWorkOrderById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const workOrder = await WorkOrder.findById(id);
  res.status(200).json({ id: workOrder });
};

// @POST NEW WORK ORDER
const createWorkOrders = async (req: Request, res: Response) => {
  const date = new Date();
  const workorderNumber = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${uuidv4()}`;

  try {
    const workorder = await WorkOrder.create({
      ...req.body,
      workOrderNumber: workorderNumber,
    });

    res.status(201).json({ message: "w/o created!", w_o: workorder });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export { getAllWorkOrders, createWorkOrders, getWorkOrderById };
