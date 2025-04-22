import { IoIosSearch } from "react-icons/io";

//  import components
import AllVehicles from "../components/FleetComponents/AllVehicles";

export default function Fleet() {
  return (
    <section className="relative md:ml-64 z-10">
      <form>
        <h1 className="md:pl-8 md:py-5 py-6 text-2xl font font-bold text-gray-500 border-b-2 text-center">
          Fleet
        </h1>
        <div className="px-6">
          <div
            id="search-bar"
            className="flex border-emerald-600 border rounded-xl mt-6 px-3 py-1 items-center"
          >
            <input
              placeholder="Search Vehicles..."
              className="border w-full border-none"
              type="text"
            />
            <button type="submit" className="bg-emerald-600 rounded-full p-1">
              <IoIosSearch size={20} />
            </button>
          </div>

          {/* Button chooses */}
          <select name="vehicles" id="vehicles">
            <option value="all_vehicles">All Vehicles</option>
            <option value="all_vehicles">single vehicle</option>
            <option value="all_vehicles">All Vehicles</option>
          </select>
        </div>
      </form>

      {/* display output */}
      <aside id="veh-search-results" className="px-6 mt-8">
        <AllVehicles />
      </aside>
    </section>
  );
}
