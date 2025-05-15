import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

const WorkOrder = sequelize.define(
  "work_orders",
  {
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
      allowNull: false,
    },
    laborHours: {
      type: DataTypes.DECIMAL(6, 2),
      defaultValue: 0,
      allowNull: true,
    },
    otherCharges: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    completedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    totalCost: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
      allowNull: true,
    },
    assignedShop: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

export default WorkOrder;
