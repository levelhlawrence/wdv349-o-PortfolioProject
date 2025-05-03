import { DataTypes } from "sequelize";
import { sequelize } from "../database/database"; // Import your Sequelize instance

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    techId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    zip: {
      type: DataTypes.INTEGER,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
    indexes: [
      // Add composite indexes if needed
      { fields: ["techId"] },
      { fields: ["userName"] },
      { fields: ["email"] },
    ],
  }
);

export default User;
