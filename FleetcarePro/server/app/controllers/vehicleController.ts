import { Request, Response } from "express";
import Vehicle from "../models/vehicle";

// @GET ALL VEHICLES
const getAllVehicles = async (req: Request, res: Response) => {
  try {
    const page = parseInt((req.query.page as string) || "1");
    const limit = parseInt((req.query.limit as string) || "10");

    const offset = (page - 1) * limit;

    const { count, rows } = await Vehicle.findAndCountAll({
      limit,
      offset,
      order: [["bus_no", "ASC"]],
    });

    res.json({
      currentPage: page,
      pageSize: limit,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      data: rows,
    });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
    console.log(err);
  }
};

// @GET VEHICLE BY ID
const getVehiclesById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const vehicle = await Vehicle.findByPk(id);
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
    console.log(error);
  }
};

// @POST VEHICLE
const createVehicle = async (req: Request, res: Response) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
    console.log(error);
  }
};

// @UPDATE VEHICLE
const updateVehicleById = async (req: Request, res: Response) => {
  try {
    const bus_no = await req.params.id;
    const vehiclePayload = req.body;
    const updatedVehicle = await Vehicle.update(vehiclePayload, {
      where: { bus_no: bus_no },
    });

    res.status(200).json(updatedVehicle);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
    console.log(error);
  }
};

// @DELETE VEHICLE
const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await Vehicle.destroy({ where: { bus_no: id } });
    res.status(204).json({ message: `Vehicle: ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
    console.log(error);
  }
};

export {
  getAllVehicles,
  getVehiclesById,
  createVehicle,
  updateVehicleById,
  deleteVehicle,
};
