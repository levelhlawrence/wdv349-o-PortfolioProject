import { Request, Response } from "express";
import WorkOrder from "../models/workorder";
import { v4 as uuidv4 } from "uuid";

// @GET ALL WORKORDERS
const getAllWorkOrders = async (req: Request, res: Response) => {
  try {
    const allWorkorders = await WorkOrder.find()
      .populate("vehicle")
      .populate("facility")
      .populate("technician");
    // const page = parseInt(req.query.page as string) || 1;
    // const limit = parseInt(req.query.limit as string) || 10;
    // const skip = (page - 1) * limit;

    // const [workorders, total] = await Promise.all([
    //   Vehicle.find().skip(skip).limit(limit),
    //   Vehicle.countDocuments(),
    // ]);

    // res.json({
    //   totalItems: total,
    //   currentPage: page,
    //   totalPages: Math.ceil(total / limit),
    //   vehicles,
    // });
    res.status(200).json({ w_o: allWorkorders });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// @POST NEW WORKORDER
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

export { getAllWorkOrders, createWorkOrders };
