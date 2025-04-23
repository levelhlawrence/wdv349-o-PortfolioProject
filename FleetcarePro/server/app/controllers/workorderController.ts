import { Request, Response } from "express";
import WorkOrder from "../models/workorder";

const getAllWorkOrders = async (req: Request, res: Response) => {
  try {
    const allWorkorders = await WorkOrder.find();
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

const createWorkOrders = async (req: Request, res: Response) => {
  try {
    const workorder = await WorkOrder.create(req.body);
    res.status(201).json({ message: "w/o created!", w_o: workorder });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export { getAllWorkOrders, createWorkOrders };
