import { Request, Response } from "express";
import Vehicle from "../models/vehicle";

const getAllVehicles = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const [vehicles, total] = await Promise.all([
      Vehicle.find().skip(skip).limit(limit),
      Vehicle.countDocuments(),
    ]);

    res.json({
      totalItems: total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      vehicles,
    });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export { getAllVehicles };
