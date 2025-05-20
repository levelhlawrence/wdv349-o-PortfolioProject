// AddVehicle.tsx
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState, ChangeEvent } from "react";
import axios from "axios";

export function AddVehicle() {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/vehicles`,
        formData
      );
      alert("Vehicle added successfully!");
      setFormData({});
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to add vehicle.");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-md font-light text-sm">
          Add Vehicle
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle className="text-center">Add New Vehicle</SheetTitle>
          <SheetDescription className="text-center">
            Enter the vehicle information and click Save to add to the fleet.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-4 py-4 px-20 overflow-y-scroll max-h-[70vh]">
            {[
              { id: "bus_no", label: "Bus No", type: "number" },
              { id: "veh_make", label: "Vehicle Make", type: "text" },
              { id: "veh_model", label: "Vehicle Model", type: "text" },
              { id: "body_model", label: "Body Model", type: "text" },
              { id: "body_make", label: "Body Make", type: "text" },
              { id: "body_no", label: "Body No", type: "number" },
              { id: "body_year", label: "Body Year", type: "number" },
              { id: "chassis_year", label: "Chassis Year", type: "number" },
              { id: "chassis_no", label: "Chassis No", type: "text" },
              { id: "vin_number", label: "VIN Number", type: "text" },
              { id: "tag_no", label: "Tag No", type: "text" },
              { id: "eng_type", label: "Engine Type", type: "text" },
              { id: "eng_manuf", label: "Engine Manufacturer", type: "text" },
              { id: "eng_model", label: "Engine Model", type: "text" },
              { id: "eng_serial_no", label: "Engine Serial No", type: "text" },
              {
                id: "trans_serial_no",
                label: "Transmission Serial No",
                type: "text",
              },
              {
                id: "trans_manuf",
                label: "Transmission Manufacturer",
                type: "text",
              },
              { id: "trans_model", label: "Transmission Model", type: "text" },
              { id: "vehicle_class", label: "Vehicle Class", type: "text" },
              { id: "status", label: "Status", type: "text" },
              { id: "assigned_shop", label: "Assigned Shop", type: "text" },
              { id: "bus_driver", label: "Bus Driver", type: "text" },
              { id: "insp_group", label: "Inspection Group", type: "number" },
              { id: "trade_code", label: "Trade Code", type: "text" },
              { id: "pm_class", label: "PM Class", type: "text" },
              { id: "fuel_type", label: "Fuel Type", type: "text" },
              { id: "fuel_gal", label: "Fuel Capacity (gal)", type: "number" },
              {
                id: "last_fuel_mileage",
                label: "Last Fuel Mileage",
                type: "number",
              },
              { id: "ytd_fuel", label: "YTD Fuel", type: "number" },
              {
                id: "current_mileage",
                label: "Current Mileage",
                type: "number",
              },
              {
                id: "sch_begin_mileage",
                label: "Schedule Begin Mileage",
                type: "number",
              },
              {
                id: "last_pm_mileage",
                label: "Last PM Mileage",
                type: "number",
              },
              {
                id: "next_pm_mileage",
                label: "Next PM Mileage",
                type: "number",
              },
              { id: "last_pm_date", label: "Last PM Date", type: "date" },
              { id: "next_pm_date", label: "Next PM Date", type: "date" },
              { id: "next_ps_date", label: "Next PS Date", type: "date" },
              { id: "inservice_date", label: "In Service Date", type: "date" },
              { id: "last_ps_date", label: "Last PS Date", type: "date" },
              { id: "last_time_in", label: "Last Time In", type: "date" },
              { id: "last_time_out", label: "Last Time Out", type: "date" },
              {
                id: "last_oil_change",
                label: "Last Oil Change (mi)",
                type: "number",
              },
              { id: "next_oil_change", label: "Next Oil Change", type: "text" },
              { id: "month_1", label: "Month 1", type: "date" },
              { id: "month_2", label: "Month 2", type: "date" },
              { id: "month_3", label: "Month 3", type: "date" },
              { id: "month_4", label: "Month 4", type: "date" },
              { id: "month_5", label: "Month 5", type: "date" },
              { id: "month_6", label: "Month 6", type: "date" },
              { id: "month_7", label: "Month 7", type: "date" },
              { id: "month_8", label: "Month 8", type: "date" },
              { id: "month_9", label: "Month 9", type: "date" },
              { id: "month_10", label: "Month 10", type: "date" },
              { id: "month_11", label: "Month 11", type: "date" },
              { id: "month_12", label: "Month 12", type: "date" },
              { id: "month_13", label: "Month 13", type: "date" },
              { id: "pm_month_1", label: "PM Month 1", type: "date" },
              { id: "pm_month_2", label: "PM Month 2", type: "date" },
              { id: "pm_month_3", label: "PM Month 3", type: "date" },
              { id: "orig_cost", label: "Original Cost", type: "number" },
              { id: "labor_cost", label: "Labor Cost", type: "number" },
              { id: "parts_cost", label: "Parts Cost", type: "number" },
              { id: "other_cost", label: "Other Cost", type: "number" },
              {
                id: "total_opr_cost",
                label: "Total Operating Cost",
                type: "number",
              },
              { id: "gross_weight", label: "Gross Weight", type: "number" },
              { id: "gvw_front", label: "GVW Front", type: "number" },
              { id: "gvw_rear", label: "GVW Rear", type: "number" },
              { id: "tire_size", label: "Tire Size", type: "text" },
              { id: "wheel_base", label: "Wheel Base", type: "number" },
              {
                id: "wheel_chair",
                label: "Wheel Chair Accessible",
                type: "checkbox",
              },
              { id: "status_date", label: "Status Date", type: "date" },
            ].map(({ id, label, type }) => (
              <div className="grid grid-cols-4 items-center gap-4" key={id}>
                <Label htmlFor={id} className="text-right">
                  {label}
                </Label>
                <Input
                  id={id}
                  name={id}
                  type={type}
                  value={type === "checkbox" ? undefined : formData[id] || ""}
                  checked={
                    type === "checkbox" ? formData[id] || false : undefined
                  }
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
            ))}
          </div>

          <SheetFooter className="grid grid-cols-6 gap-2 border-t pt-6">
            <SheetClose className="col-start-3 col-span-2" asChild>
              <Button type="submit">Save Vehicle</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
