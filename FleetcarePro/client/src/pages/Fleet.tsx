import { IoIosSearch } from "react-icons/io";
import { useRef, useState } from "react";
import { useApi } from "../components/ApiContext";
import { AddVehicle } from "../components/FleetComponents/AddVehicle";

//  import components
import DisplayVehicles from "../components/FleetComponents/DisplayVehicles";

export default function Fleet() {
  const [page, setPage] = useState(1 as number);
  const [pageSize, setPageSize] = useState<Number>(10 as number);
  const vehFilterSelect = useRef<HTMLSelectElement>(null);
  const { vehicles, getAllVehicles } = useApi();

  // next page
  const nextPage = () => {
    if (vehicles?.totalPages !== undefined && page < vehicles?.totalPages) {
      setPage(page + 1);
    }
    return;
  };
  // previous page
  const prevPage = () => {
    if (vehicles?.totalPages !== undefined && page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section id="fleet-page" className="relative md:ml-64 z-10">
      <div
        id="fleet-headed"
        className="border-b-2 flex justify-between px-8 items-center py-4"
      >
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Fleet Vehicles
        </h1>
        <AddVehicle />
      </div>
      <form>
        <div className="px-6 flex items-center flex-row md:items-center gap-4 pt-12">
          <div
            id="search-bar"
            className="flex border-gray-300 border rounded-md px-3 py-1 items-center w-fit"
          >
            <IoIosSearch className="mr-2" size={20} />
            <input
              placeholder="Search"
              className="border w-full border-none"
              type="text"
            />
          </div>

          {/* Button chooses */}
          <select
            ref={vehFilterSelect}
            className="border-gray-300 border rounded-md p-1"
            name="vehicles"
            id="vehicles"
          >
            <option value="all_vehicles">All Vehicles</option>
            <option value="all_vehicles">Buses Only</option>
            <option value="all_vehicles">White Fleet Only</option>
          </select>
        </div>
      </form>

      {/* display output */}
      <aside id="veh-search-results" className="px-6 mt-8">
        <DisplayVehicles
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
          pageSize={Number(pageSize)}
          setPageSize={setPageSize}
          vehicles={vehicles}
          getAllVehicles={getAllVehicles}
        />
      </aside>
    </section>
  );
}
