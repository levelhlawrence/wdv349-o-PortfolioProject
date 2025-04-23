import { Schema, model } from "mongoose";

const workOrderSchema = new Schema(
  {
    workOrderNumber: {
      type: String,
      required: true,
      unique: true,
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },
    issueReported: {
      type: String,
      required: true,
    },
    technician: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["open", "in progress", "on hold", "completed", "cancelled"],
      default: "open",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "urgent"],
      default: "medium",
    },
    laborHours: {
      type: Number,
      default: 0,
    },
    partsUsed: [
      {
        partName: String,
        quantity: Number,
        unitCost: Number,
      },
    ],
    otherCharges: {
      type: Number,
      default: 0,
    },
    notes: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    completedAt: Date,
    totalCost: {
      type: Number,
      default: 0,
    },
    assignedShop: String,
    facility: {
      type: Schema.Types.ObjectId,
      ref: "Facility",
    },
    tasks: [taskSchema],
  },
  { collection: "WorkOrders" }
);

const WorkOrder = model("WorkOrder", workOrderSchema);
export default WorkOrder;
