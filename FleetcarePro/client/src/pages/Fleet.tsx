import { IoIosSearch } from "react-icons/io";

//  import components
import DisplayVehicles from "../components/FleetComponents/DisplayVehicles";

export default function Fleet() {
  const testSelect = () => {
    const select = document.getElementById("vehicles") as HTMLSelectElement;
    const selectedValue = select.value;
    console.log(selectedValue);
  };

  return (
    <section id="fleet-page" className="relative md:ml-64 z-10">
      <div
        id="fleet-headed"
        className="border-b-2 flex justify-between px-8 items-center py-4"
      >
        <h1 className="text-xl font-semibold tracking-wide">Fleet Vehicles</h1>
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-md font-light text-sm">
          Add Vehicle
        </button>
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
        <DisplayVehicles />
      </aside>
    </section>
  );
}
