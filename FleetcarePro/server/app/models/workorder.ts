import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

const WorkOrder = sequelize.define("WorkOrder", {
  workOrderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  issueReported: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM(
      "open",
      "in progress",
      "awaiting parts",
      "completed",
      "closed",
      "created in error"
    ),
    defaultValue: "open",
  },
  priority: {
    type: DataTypes.ENUM("low", "medium", "high", "urgent"),
    defaultValue: "medium",
  },
  laborHours: {
    type: DataTypes.DECIMAL(6, 2),
    defaultValue: 0,
  },
  otherCharges: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  notes: {
    type: DataTypes.TEXT,
  },
  completedAt: {
    type: DataTypes.DATE,
  },
  totalCost: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  assignedShop: {
    type: DataTypes.STRING,
  },
});

export default WorkOrder;
