import { Request, Response } from "express";
import WorkOrder from "../models/workorder";

// Helper function to get formatted date
// function getFormattedDate() {
//   const date = new Date();
//   return {
//     year: date.getFullYear(),
//     month: (date.getMonth() + 1).toString().padStart(2, "0"),
//     day: date.getDate().toString().padStart(2, "0"),
//   };
// }

// @GET ALL WORK ORDERS
const getAllWorkOrders = async (req: Request, res: Response) => {
  try {
    const workOrders = await WorkOrder.findAll();
    res.status(200).json(workOrders);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
    console.log(error);
  }
};

// @GET WORK ORDER BY ID
const getWorkOrderById = async (req: Request, res: Response) => {
  try {
    const workOrderNumber = req.params.id;
    const workOrder = await WorkOrder.findOne({
      where: { workOrderNumber: workOrderNumber },
    });

    res.status(200).json(workOrder);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
    console.log(error);
  }
};

// @POST WORK ORDER
const createWorkOrders = async (req: Request, res: Response) => {
  try {
    const workOrderPayload = req.body;
    const newWorkOrder = await WorkOrder.create({
      ...workOrderPayload,
    });

    res.status(201).json(newWorkOrder);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
    console.log(error);
  }
};

// @PUT WORK ORDER
const updateWorkOrder = async (req: Request, res: Response) => {
  try {
    const workOrderNumber = req.params.id;
    const workOrderPayload = req.body;
    const updatedWorkOrder = await WorkOrder.update(
      { ...workOrderPayload },
      { where: { workOrderNumber: workOrderNumber } }
    );
    res.status(200).json(updatedWorkOrder);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
    console.log(error);
  }
};

// @DELETE WORK ORDER
const deleteWorkOrder = async (req: Request, res: Response) => {
  try {
    const workOrderNumber = req.params.id;
    await WorkOrder.destroy({ where: { workOrderNumber: workOrderNumber } });
    res.status(200).json({ message: "Work order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
    console.log(error);
  }
};
export {
  createWorkOrders,
  getAllWorkOrders,
  getWorkOrderById,
  updateWorkOrder,
  deleteWorkOrder,
};
