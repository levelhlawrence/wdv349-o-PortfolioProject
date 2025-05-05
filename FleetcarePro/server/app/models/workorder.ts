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
      "on hold",
      "completed",
      "cancelled"
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

// Define associations
WorkOrder.belongsTo(sequelize.models.Vehicle, {
  foreignKey: {
    name: "vehicleId",
    allowNull: false,
  },
  as: "vehicle",
});

WorkOrder.belongsTo(sequelize.models.User, {
  foreignKey: "technicianId",
  as: "technician",
});

WorkOrder.belongsTo(sequelize.models.Facility, {
  foreignKey: "facilityId",
  as: "facility",
});

export default WorkOrder;
