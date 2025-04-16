import { Request, Response } from "express";
import Facility from "../models/facility";

// @GET ALL FACILITIES
const getAllFacilities = async (req: Request, res: Response) => {
  try {
    const facilities = await Facility.find();

    res.status(200).json({ facilities: facilities });
  } catch (error) {
    console.error("Error fetching facilities:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @GET FACILITY BY ID
const getFacilityById = async (req: Request, res: Response) => {
  res.status(501).json({ message: "Not Implemented" });
};

// @CREATE FACILITY
const createFacility = async (req: Request, res: Response) => {
  try {
    const facility = await Facility.create(req.body);

    res.status(201).json({ message: "Facility Created", facility: facility });
  } catch (error) {
    console.error("Error creating facility:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @UPDATE FACILITY
const updateFacility = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedFacility = req.body;

    const newFacility = await Facility.findByIdAndUpdate(id, updatedFacility, {
      new: true,
    });

    res.status(201).json({ message: updatedFacility });
  } catch (error) {
    console.error("Error updating facility:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @DELETE FACILITY
const deleteFacility = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await Facility.findByIdAndDelete(id);

    res.status(200).json({ message: "Facility Deleted" });
  } catch (error) {
    console.error("Error deleting facility:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export {
  getAllFacilities,
  createFacility,
  updateFacility,
  getFacilityById,
  deleteFacility,
};
