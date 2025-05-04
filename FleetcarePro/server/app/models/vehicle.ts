import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

const Vehicle = sequelize.define(
  "Vehicle",
  {
    bus_no: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    veh_make: {
      type: DataTypes.STRING,
    },
    body_model: {
      type: DataTypes.STRING,
    },
    fuel_type: {
      type: DataTypes.STRING,
    },
    vin_number: {
      type: DataTypes.STRING,
      unique: true,
    },
    tag_no: {
      type: DataTypes.STRING,
    },
    body_year: {
      type: DataTypes.INTEGER,
    },
    next_ps_date: {
      type: DataTypes.DATE,
    },
    inservice_date: {
      type: DataTypes.DATE,
    },
    vehicle_class: {
      type: DataTypes.STRING,
    },
    // Monthly dates (consider normalizing this into a separate table)
    month_1: { type: DataTypes.DATE },
    month_2: { type: DataTypes.DATE },
    month_3: { type: DataTypes.DATE },
    month_4: { type: DataTypes.DATE },
    month_5: { type: DataTypes.DATE },
    month_6: { type: DataTypes.DATE },
    month_7: { type: DataTypes.DATE },
    month_8: { type: DataTypes.DATE },
    month_9: { type: DataTypes.DATE },
    month_10: { type: DataTypes.DATE },
    month_11: { type: DataTypes.DATE },
    month_12: { type: DataTypes.DATE },
    month_13: { type: DataTypes.DATE },

    veh_model: { type: DataTypes.STRING },
    chassis_year: { type: DataTypes.INTEGER },
    orig_cost: { type: DataTypes.DECIMAL(10, 2) }, // Better for monetary values
    cap: { type: DataTypes.INTEGER },
    body_make: { type: DataTypes.STRING },
    body_no: { type: DataTypes.INTEGER },
    trans_serial_no: { type: DataTypes.STRING },
    trans_manuf: { type: DataTypes.STRING },
    trans_model: { type: DataTypes.STRING },
    eng_type: { type: DataTypes.STRING },
    eng_manuf: { type: DataTypes.STRING },
    eng_model: { type: DataTypes.STRING },
    eng_serial_no: { type: DataTypes.STRING },
    last_in_shop: { type: DataTypes.INTEGER },
    last_ps_date: { type: DataTypes.DATE },
    next_oil_change: { type: DataTypes.STRING },
    fuel_gal: { type: DataTypes.DECIMAL(6, 2) },
    last_fuel_mileage: { type: DataTypes.INTEGER },
    ytd_fuel: { type: DataTypes.DECIMAL(10, 2) },
    current_mileage: { type: DataTypes.INTEGER },
    sch_begin_mileage: { type: DataTypes.INTEGER },
    labor_cost: { type: DataTypes.DECIMAL(10, 2) },
    parts_cost: { type: DataTypes.DECIMAL(10, 2) },
    other_cost: { type: DataTypes.DECIMAL(10, 2) },
    total_opr_cost: { type: DataTypes.DECIMAL(10, 2) },
    chassis_no: { type: DataTypes.STRING },
    last_time_in: { type: DataTypes.DATE },
    last_time_out: { type: DataTypes.DATE },
    last_oil_change: { type: DataTypes.INTEGER },
    status: { type: DataTypes.STRING },
    gross_weight: { type: DataTypes.INTEGER },
    gvw_front: { type: DataTypes.INTEGER },
    tire_size: { type: DataTypes.STRING },
    gvw_rear: { type: DataTypes.INTEGER },
    wheel_base: { type: DataTypes.INTEGER },
    wheel_chair: { type: DataTypes.BOOLEAN },
    assigned_shop: { type: DataTypes.STRING },
    insp_group: { type: DataTypes.INTEGER },
    bus_driver: { type: DataTypes.STRING },
    status_date: { type: DataTypes.DATE },
    trade_code: { type: DataTypes.STRING },
    last_pm_mileage: { type: DataTypes.INTEGER },
    next_pm_mileage: { type: DataTypes.INTEGER },
    last_pm_date: { type: DataTypes.DATE },
    next_pm_date: { type: DataTypes.DATE },
    pm_month_1: { type: DataTypes.DATE },
    pm_month_2: { type: DataTypes.DATE },
    pm_month_3: { type: DataTypes.DATE },
    pm_class: { type: DataTypes.STRING },
  },
  {
    tableName: "vehicle_profile",
    timestamps: false,
    paranoid: false,
  }
);

// Vehicle.belongsTo(Facility, {
//   foreignKey: "facilityId",
//   as: "facility",
// });

export default Vehicle;
