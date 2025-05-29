import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApi } from "../ApiContext";
import { Button } from "../ui/button";

const FleetDetails = () => {
  const [edit, setEdit] = useState(false);
  const { id } = useParams();
  const { getVehicleById, vehicleDetails } = useApi();

  const editHandler = () => setEdit(!edit);

  const displayValue = (value: any, fallback = "N/A") => {
    if (!value || value === "NULL") return fallback;
    return value;
  };

  useEffect(() => {
    getVehicleById(id);
  }, []);

  if (!vehicleDetails) return <p className="pt-4 md:ml-64">Loading...</p>;

  return (
    <section className="grid grid-cols-1 gap-2 pt-4 md:ml-64 z-10 max-h-screen overflow-scroll">
      <div className="px-6">
        <Button onClick={editHandler}>{edit ? "Close" : "Edit"}</Button>
      </div>

      {edit && (
        <div className="text-sm flex gap-2 px-6">
          <Button variant="secondary">Update</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      )}

      <div className="flex justify-between items-center px-6 py-2">
        <h1 className="text-2xl font-bold">
          {displayValue(vehicleDetails.vehicle_class)}:{" "}
          <span className="font-normal">
            {displayValue(vehicleDetails.bus_no)}
          </span>
        </h1>
        <p className="flex items-center text-xl">
          VIN: {displayValue(vehicleDetails.vin_number)}
        </p>
      </div>

      <div className="bg-gray-700 text-white px-6 pt-4 pb-40">
        {/* Example Detail Row */}
        <div className="flex justify-between border-b leading-10">
          <p>
            <strong>Make:</strong>{" "}
            <span className="border rounded p-1">
              {displayValue(vehicleDetails.body_make)}
            </span>
          </p>
          <p>
            <strong>Model:</strong> {displayValue(vehicleDetails.body_model)}
          </p>
        </div>

        {/* Continue each pair like this */}
        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>Body Number:</strong> {displayValue(vehicleDetails.body_no)}
          </p>
          <p>
            <strong>Year:</strong> {parseInt(vehicleDetails.body_year) || "N/A"}
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>Status:</strong> {displayValue(vehicleDetails.status)}
          </p>
          <p>
            <strong>Tag Number:</strong> {displayValue(vehicleDetails.tag_no)}
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>Bus Driver:</strong>{" "}
            {displayValue(vehicleDetails.bus_driver)}
          </p>
          <p>
            <strong>Chassis No:</strong>{" "}
            {displayValue(vehicleDetails.chassis_no)}
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>Chassis Year:</strong>{" "}
            {parseInt(vehicleDetails.chassis_year) || "N/A"}
          </p>
          <p>
            <strong>Current Mileage:</strong>{" "}
            {displayValue(vehicleDetails.current_mileage)}
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>Engine:</strong>{" "}
            {`${displayValue(vehicleDetails.eng_manuf)} ${displayValue(
              vehicleDetails.eng_model
            )} (${displayValue(vehicleDetails.eng_type)})`}
          </p>
          <p>
            <strong>Engine Serial No:</strong>{" "}
            {displayValue(vehicleDetails.eng_serial_no)}
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>Transmission:</strong>{" "}
            {`${displayValue(vehicleDetails.trans_manuf)} ${displayValue(
              vehicleDetails.trans_model
            )}`}
          </p>
          <p>
            <strong>Transmission Serial No:</strong>{" "}
            {displayValue(vehicleDetails.trans_serial_no)}
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>Fuel Type:</strong> {displayValue(vehicleDetails.fuel_type)}
          </p>
          <p>
            <strong>Fuel Capacity:</strong>{" "}
            {displayValue(vehicleDetails.fuel_gal)} gal
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>YTD Fuel:</strong> {displayValue(vehicleDetails.ytd_fuel)}
          </p>
          <p>
            <strong>Seating Capacity:</strong>{" "}
            {displayValue(vehicleDetails.cap)}
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>Gross Weight:</strong>{" "}
            {displayValue(vehicleDetails.gross_weight)} lbs
          </p>
          <p>
            <strong>GVW Front:</strong> {displayValue(vehicleDetails.gvw_front)}
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>GVW Rear:</strong> {displayValue(vehicleDetails.gvw_rear)}
          </p>
          <p>
            <strong>Wheelbase:</strong>{" "}
            {displayValue(vehicleDetails.wheel_base)}
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>Wheelchair Equipped:</strong>{" "}
            {displayValue(vehicleDetails.wheel_chair)}
          </p>
          <p>
            <strong>Tire Size:</strong> {displayValue(vehicleDetails.tire_size)}
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>Assigned Shop:</strong>{" "}
            {displayValue(vehicleDetails.assigned_shop)}
          </p>
          <p>
            <strong>Inspection Group:</strong>{" "}
            {displayValue(vehicleDetails.insp_group)}
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>In Service Date:</strong>{" "}
            {displayValue(vehicleDetails.inservice_date)}
          </p>
          <p>
            <strong>Status Date:</strong>{" "}
            {displayValue(vehicleDetails.status_date)}
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>Schedule Begin Mileage:</strong>{" "}
            {displayValue(vehicleDetails.sch_begin_mileage)}
          </p>
          <p>
            <strong>Last Fuel Mileage:</strong>{" "}
            {displayValue(vehicleDetails.last_fuel_mileage)}
          </p>
        </div>

        <div className="flex justify-between border-b mt-2 leading-10">
          <p>
            <strong>Last In Shop:</strong>{" "}
            {displayValue(vehicleDetails.last_in_shop)}
          </p>
          <p>
            <strong>Last Oil Change:</strong>{" "}
            {displayValue(vehicleDetails.last_oil_change)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FleetDetails;
