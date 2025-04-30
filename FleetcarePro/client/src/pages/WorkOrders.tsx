import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";
import { ShowAllWorkOrders } from "@/components/workorderComponents/AllWorkOrders";
const dotenv = import.meta.env;

export default function WorkOrders() {
  const [workOrders, setWorkOrders] = useState([]);

  const showAllWorkorders = async () => {
    const response = await axios.get(`${dotenv.VITE_API_URL}/workorders`);
    const data = await response.data;
    await setWorkOrders(data);
    console.log(workOrders);
  };

  useEffect(() => {
    showAllWorkorders();
  }, []);

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
      <aside className="px-6 mt-8">
        <p>results</p>
        <ShowAllWorkOrders />
      </aside>
    </section>
  );
}
