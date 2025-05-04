const { DataTypes } = require("sequelize");
import { sequelize } from "../database/database";

// Facility Model
const Facility = sequelize.define(
  "Facility",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    website: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    fax: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export default Facility;
