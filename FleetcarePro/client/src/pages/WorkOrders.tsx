import { IoIosSearch } from "react-icons/io";

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

          <div>
            <label htmlFor="all-buses">all workorders</label>
            <input id="all-buses" type="radio" />
          </div>
        </div>
      </form>

      {/* display output */}
      <aside className="px-6 mt-8">
        <p>results</p>
      </aside>
    </section>
  );
}
