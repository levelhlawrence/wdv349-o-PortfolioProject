import { IoIosSearch } from "react-icons/io";
import ShowAllWorkOrders from "../components/workorderComponents/ShowAllWorkOrders";

export default function WorkOrders() {
  return (
    <section className="relative md:ml-64 z-10">
      <form>
        <h1 className="md:pl-8 md:py-5 py-6 text-2xl font font-bold text-gray-500 border-b-2 text-center">
          Work Orders
        </h1>
        <div className="px-6">
          <div
            id="search-bar"
            className="flex border-emerald-600 border rounded-xl mt-6 px-3 items-center"
          >
            <input
              placeholder="Search Work Orders..."
              className="border w-full border-none"
              type="text"
            />
            <IoIosSearch size={20} />
          </div>

          <div className="flex flex-col mt-2 w-fit">
            <label
              htmlFor="workorders"
              className="font-bold text-sm text-emerald-700"
            >
              Query Work Orders:{" "}
            </label>
            <select
              name="workorders"
              id="workorders"
              className="w-fit border border-emerald-600 rounded-md p-1 mt-1"
            >
              <option value="all">All Work Orders</option>
              <option value="open">Open Work Orders</option>
              <option value="closed">Closed Work Orders</option>
            </select>
          </div>
        </div>
      </form>
      {/* display output */}
      <aside>
        <p>Test</p>
        <ShowAllWorkOrders />
      </aside>
    </section>
  );
}
