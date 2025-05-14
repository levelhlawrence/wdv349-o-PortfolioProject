import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApi } from "../ApiContext";
import { Button } from "../ui/button";

const FleetDetails = () => {
  const [edit, setEdit] = useState(false);
  const { id } = useParams();
  const { getVehicleById, vehicleDetails } = useApi();

  const editHandler = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    getVehicleById(id);
  }, []);
  return (
    <>
      {vehicleDetails && (
        <section className="grid grid-cols-1 gap-2 pt-4 md:ml-64 z-10 max-h-screen overflow-scroll">
          <div className="px-6 ">
            <Button onClick={editHandler}>{edit ? "Close" : "Edit"}</Button>
          </div>
          {edit && (
            <div className="text-sm flex gap-2 px-6">
              <Button variant="secondary">Update</Button>{" "}
              <Button variant="destructive">Delete</Button>{" "}
            </div>
          )}
          <div className="flex justify-between items-center px-6 py-2">
            <h1 className="text-2xl font-bold">
              {vehicleDetails.vehicle_class ?? "N/A"}:{" "}
              <span className="font-normal">
                {vehicleDetails.bus_no ?? "N/A"}
              </span>
            </h1>

            <p className="flex items-center">
              <span className="text-xl">VIN: </span>{" "}
              {vehicleDetails.vin_number ?? "N/A"}
            </p>
          </div>
          <div className="bg-gray-700 text-white px-6 pt-4 pb-40">
            <div className="flex justify-between items-center border-b leading-10">
              <p>
                <span className="font-bold">Make:</span>{" "}
                <span className="border rounded p-1">
                  {vehicleDetails.body_make ?? "N/A"}
                </span>
              </p>
              <p>
                <span className="font-bold">Model</span>:{" "}
                {vehicleDetails.body_model ?? "N/A"}
              </p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>
                <span className="font-bold">Body Number:</span>{" "}
                {vehicleDetails.body_no ?? "N/A"}
              </p>
              <p>
                <span className="font-bold">Year:</span>{" "}
                {parseInt(vehicleDetails.body_year) || "N/A"}
              </p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>
                <span className="font-bold">Status:</span>{" "}
                {vehicleDetails.status ?? "N/A"}
              </p>
              <p>
                <span className="font-bold">Tag Number:</span>{" "}
                {vehicleDetails.tag_no ?? "N/A"}
              </p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>
                <span className="font-bold">Bus Driver:</span>{" "}
                {vehicleDetails.bus_driver !== "NULL"
                  ? vehicleDetails.bus_driver
                  : "N/A"}
              </p>
              <p>
                <span className="font-bold">Chassis No:</span>{" "}
                {vehicleDetails.chassis_no !== "NULL"
                  ? vehicleDetails.chassis_no
                  : "N/A"}
              </p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>
                <span className="font-bold">Chassis Year:</span>{" "}
                {parseInt(vehicleDetails.chassis_year) || "N/A"}
              </p>
              <p>
                <span className="font-bold">Current Mileage:</span>{" "}
                {vehicleDetails.current_mileage !== "NULL"
                  ? vehicleDetails.current_mileage
                  : "N/A"}
              </p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>
                <span className="font-bold">Engine:</span>{" "}
                {vehicleDetails.eng_manuf ?? "N/A"}{" "}
                {vehicleDetails.eng_model ?? "N/A"} (
                {vehicleDetails.eng_type ?? "N/A"})
              </p>
              <p>
                Engine Serial No:{" "}
                {vehicleDetails.eng_serial_no !== "NULL"
                  ? vehicleDetails.eng_serial_no
                  : "N/A"}
              </p>
            </div>

            <div className="flex justify-between items-center border-b mt-2 leading-10">
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
            </div>

            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>Fuel Type: {vehicleDetails.fuel_type ?? "N/A"}</p>
              <p>Fuel Capacity: {vehicleDetails.fuel_gal} gal</p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>YTD Fuel: {vehicleDetails.ytd_fuel ?? "N/A"}</p>
              <p>Seating Capacity: {vehicleDetails.cap ?? "N/A"}</p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>Gross Weight: {vehicleDetails.gross_weight ?? "N/A"} lbs</p>
              <p>
                GVW Front:{" "}
                {vehicleDetails.gvw_front !== "NULL"
                  ? vehicleDetails.gvw_front
                  : "N/A"}
              </p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
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
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
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
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>Assigned Shop: {vehicleDetails.assigned_shop ?? "N/A"}</p>
              <p>Inspection Group: {vehicleDetails.insp_group ?? "N/A"}</p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>In Service Date: {vehicleDetails.inservice_date ?? "N/A"}</p>
              <p>Status Date: {vehicleDetails.status_date ?? "N/A"}</p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>
                Schedule Begin Mileage:{" "}
                {vehicleDetails.sch_begin_mileage ?? "N/A"}
              </p>

              <p>
                Last Fuel Mileage:{" "}
                {vehicleDetails.last_fuel_mileage !== "NULL"
                  ? vehicleDetails.last_fuel_mileage
                  : "N/A"}
              </p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>Last In Shop: {vehicleDetails.last_in_shop ?? "N/A"}</p>
              <p>Last Oil Change: {vehicleDetails.last_oil_change ?? "N/A"}</p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>Next Oil Change: {vehicleDetails.next_oil_change ?? "N/A"}</p>

              <p>
                Last Time In:{" "}
                {vehicleDetails.last_time_in !== "NULL"
                  ? vehicleDetails.last_time_in
                  : "N/A"}
              </p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
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
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
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
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
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
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>
                PM Class:{" "}
                {vehicleDetails.pm_class !== "NULL"
                  ? vehicleDetails.pm_class
                  : "N/A"}
              </p>
            </div>

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
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>Original Cost: ${vehicleDetails.orig_cost ?? "N/A"}</p>
              <p>Parts Cost: ${vehicleDetails.parts_cost ?? "N/A"}</p>
            </div>
            <div className="flex justify-between items-center border-b mt-2 leading-10">
              <p>Labor Cost: ${vehicleDetails.labor_cost ?? "N/A"}</p>
              <p>
                Other Cost:{" "}
                {vehicleDetails.other_cost !== "NULL"
                  ? `$${vehicleDetails.other_cost}`
                  : "N/A"}
              </p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p>
                Total Operational Cost: $
                {vehicleDetails.total_opr_cost ?? "N/A"}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FleetDetails;
