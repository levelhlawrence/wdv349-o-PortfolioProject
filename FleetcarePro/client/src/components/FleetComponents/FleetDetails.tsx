import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useApi } from "../ApiContext";

const FleetDetails = () => {
  const { id } = useParams();
  const { getVehicleById, vehicleDetails } = useApi();

  useEffect(() => {
    getVehicleById(id);
  }, []);
  return (
    <>
      {vehicleDetails && (
        <section>
          <h1>
            {vehicleDetails.vehicle_class ?? "N/A"}:{" "}
            {vehicleDetails.bus_no ?? "N/A"}
          </h1>

          <p>VIN: {vehicleDetails.vin_number ?? "N/A"}</p>
          <p>Make: {vehicleDetails.body_make ?? "N/A"}</p>
          <p>Model: {vehicleDetails.body_model ?? "N/A"}</p>
          <p>Body Number: {vehicleDetails.body_no ?? "N/A"}</p>
          <p>Year: {parseInt(vehicleDetails.body_year) || "N/A"}</p>
          <p>Status: {vehicleDetails.status ?? "N/A"}</p>
          <p>Tag Number: {vehicleDetails.tag_no ?? "N/A"}</p>
          <p>
            Bus Driver:{" "}
            {vehicleDetails.bus_driver !== "NULL"
              ? vehicleDetails.bus_driver
              : "N/A"}
          </p>
          <p>
            Chassis No:{" "}
            {vehicleDetails.chassis_no !== "NULL"
              ? vehicleDetails.chassis_no
              : "N/A"}
          </p>
          <p>Chassis Year: {parseInt(vehicleDetails.chassis_year) || "N/A"}</p>
          <p>
            Current Mileage:{" "}
            {vehicleDetails.current_mileage !== "NULL"
              ? vehicleDetails.current_mileage
              : "N/A"}
          </p>

          <p>
            Engine: {vehicleDetails.eng_manuf ?? "N/A"}{" "}
            {vehicleDetails.eng_model ?? "N/A"} (
            {vehicleDetails.eng_type ?? "N/A"})
          </p>
          <p>
            Engine Serial No:{" "}
            {vehicleDetails.eng_serial_no !== "NULL"
              ? vehicleDetails.eng_serial_no
              : "N/A"}
          </p>

          <p>
            Transmission:{" "}
            {vehicleDetails.trans_manuf !== "NULL"
              ? vehicleDetails.trans_manuf
              : "N/A"}{" "}
            {vehicleDetails.trans_model !== "NULL"
              ? vehicleDetails.trans_model
              : ""}
          </p>
          <p>
            Transmission Serial No:{" "}
            {vehicleDetails.trans_serial_no !== "NULL"
              ? vehicleDetails.trans_serial_no
              : "N/A"}
          </p>

          <p>Fuel Type: {vehicleDetails.fuel_type ?? "N/A"}</p>
          <p>Fuel Capacity: {vehicleDetails.fuel_gal} gal</p>
          <p>YTD Fuel: {vehicleDetails.ytd_fuel ?? "N/A"}</p>

          <p>Seating Capacity: {vehicleDetails.cap ?? "N/A"}</p>
          <p>Gross Weight: {vehicleDetails.gross_weight ?? "N/A"} lbs</p>
          <p>
            GVW Front:{" "}
            {vehicleDetails.gvw_front !== "NULL"
              ? vehicleDetails.gvw_front
              : "N/A"}
          </p>
          <p>
            GVW Rear:{" "}
            {vehicleDetails.gvw_rear !== "NULL"
              ? vehicleDetails.gvw_rear
              : "N/A"}
          </p>
          <p>
            Wheelbase:{" "}
            {vehicleDetails.wheel_base !== "NULL"
              ? vehicleDetails.wheel_base
              : "N/A"}
          </p>
          <p>
            Wheelchair Equipped:{" "}
            {vehicleDetails.wheel_chair !== "NULL"
              ? vehicleDetails.wheel_chair
              : "N/A"}
          </p>
          <p>
            Tire Size:{" "}
            {vehicleDetails.tire_size !== "NULL"
              ? vehicleDetails.tire_size
              : "N/A"}
          </p>

          <p>Assigned Shop: {vehicleDetails.assigned_shop ?? "N/A"}</p>
          <p>Inspection Group: {vehicleDetails.insp_group ?? "N/A"}</p>
          <p>In Service Date: {vehicleDetails.inservice_date ?? "N/A"}</p>
          <p>Status Date: {vehicleDetails.status_date ?? "N/A"}</p>
          <p>
            Schedule Begin Mileage: {vehicleDetails.sch_begin_mileage ?? "N/A"}
          </p>

          <p>
            Last Fuel Mileage:{" "}
            {vehicleDetails.last_fuel_mileage !== "NULL"
              ? vehicleDetails.last_fuel_mileage
              : "N/A"}
          </p>
          <p>Last In Shop: {vehicleDetails.last_in_shop ?? "N/A"}</p>
          <p>Last Oil Change: {vehicleDetails.last_oil_change ?? "N/A"}</p>
          <p>Next Oil Change: {vehicleDetails.next_oil_change ?? "N/A"}</p>

          <p>
            Last Time In:{" "}
            {vehicleDetails.last_time_in !== "NULL"
              ? vehicleDetails.last_time_in
              : "N/A"}
          </p>
          <p>
            Last Time Out:{" "}
            {vehicleDetails.last_time_out !== "NULL"
              ? vehicleDetails.last_time_out
              : "N/A"}
          </p>

          <p>
            Last PM Date:{" "}
            {vehicleDetails.last_pm_date.trim() !== ""
              ? vehicleDetails.last_pm_date
              : "N/A"}
          </p>
          <p>
            Next PM Date:{" "}
            {vehicleDetails.next_pm_date.trim() !== ""
              ? vehicleDetails.next_pm_date
              : "N/A"}
          </p>
          <p>Next PM Mileage: {vehicleDetails.next_pm_mileage ?? "N/A"}</p>
          <p>
            Last PM Mileage:{" "}
            {vehicleDetails.last_pm_mileage !== "NULL"
              ? vehicleDetails.last_pm_mileage
              : "N/A"}
          </p>
          <p>
            Last PS Date:{" "}
            {vehicleDetails.last_ps_date !== "NULL"
              ? vehicleDetails.last_ps_date
              : "N/A"}
          </p>
          <p>
            Next PS Date:{" "}
            {vehicleDetails.next_ps_date !== "NULL"
              ? vehicleDetails.next_ps_date
              : "N/A"}
          </p>

          <p>
            PM Class:{" "}
            {vehicleDetails.pm_class !== "NULL"
              ? vehicleDetails.pm_class
              : "N/A"}
          </p>
          <p>
            PM Month 1:{" "}
            {vehicleDetails.pm_month_1.trim() !== ""
              ? vehicleDetails.pm_month_1
              : "N/A"}
          </p>
          <p>
            PM Month 2:{" "}
            {vehicleDetails.pm_month_2.trim() !== ""
              ? vehicleDetails.pm_month_2
              : "N/A"}
          </p>
          <p>
            PM Month 3:{" "}
            {vehicleDetails.pm_month_3.trim() !== ""
              ? vehicleDetails.pm_month_3
              : "N/A"}
          </p>

          <p>Month 1: {vehicleDetails.month_1 ?? "N/A"}</p>
          {[...Array(12)].map((_, i) => {
            const key = `month_${i + 2}`;
            const val = vehicleDetails[key];
            return (
              <p key={key}>
                Month {i + 2}: {val !== "NULL" ? val : "N/A"}
              </p>
            );
          })}

          <p>
            Trade Code:{" "}
            {vehicleDetails.trade_code !== "NULL"
              ? vehicleDetails.trade_code
              : "N/A"}
          </p>

          <p>Original Cost: ${vehicleDetails.orig_cost ?? "N/A"}</p>
          <p>Parts Cost: ${vehicleDetails.parts_cost ?? "N/A"}</p>
          <p>Labor Cost: ${vehicleDetails.labor_cost ?? "N/A"}</p>
          <p>
            Other Cost:{" "}
            {vehicleDetails.other_cost !== "NULL"
              ? `$${vehicleDetails.other_cost}`
              : "N/A"}
          </p>
          <p>
            Total Operational Cost: ${vehicleDetails.total_opr_cost ?? "N/A"}
          </p>
        </section>
      )}
    </>
  );
};

export default FleetDetails;
