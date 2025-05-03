import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import User from "./user";

const Task = sequelize.define(
  "WorkOrder",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    startedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    timeIn: {
      type: DataTypes.STRING,
    },
    completedAt: {
      type: DataTypes.DATE,
    },
    timeSpentHours: {
      type: DataTypes.FLOAT,
    },
  },
  {
    timestamps: true,
  }
);

Task.belongsTo(User, {
  foreignKey: "performedById",
  as: "performedBy",
});

export default Task;
