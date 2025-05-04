import { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
const dotenv = import.meta.env;

const DisplayVehicles = () => {
  // show all vehicles by default
  const [vehicles, setVehicles] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const pageSizeRef = useRef();

  // get all vehicles
  const getAllVehicles = async () => {
    try {
      const response = await axios.get(
        `${dotenv.VITE_API_URL}/vehicles?page=${page}&limit=${pageSize}`
      );
      setVehicles(response.data);
      console.log("All vehicles:", response.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  // page size selector
  const pageSizeHandeler = () => {
    setPageSize(pageSizeRef.current.value);
  };

  // next page
  const nextPage = () => {
    if (page < vehicles?.totalPages) {
      setPage(page + 1);
    }
  };
  // previous page
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    getAllVehicles();
  }, [page, pageSize]);

  return (
    <div>
      {vehicles && (
        <div>
          <p className="mb-2">
            Total Vehicles:{" "}
            <span className="font-bold">{vehicles?.totalItems}</span>
          </p>

          <table className="table-auto w-full text-left rounded-md">
            <thead className="text-gray-600">
              <tr className="bg-gray-200 text-sm ">
                <th className="p-1 rounded-tl">Bus No.</th>
                <th>Make</th>
                <th>Model</th>
                <th className="rounded-tr">Year</th>
              </tr>
            </thead>
            {vehicles?.data?.map((vehicle) => {
              return (
                <tbody
                  key={vehicle.bus_no}
                  className="text-sm hover:bg-emerald-50 hover:cursor-pointer"
                >
                  <tr className="border-b-2 border-gray-200 hover:border-emerald-400 hover:text-emerald-600">
                    <td className="py-2">{vehicle.bus_no}</td>
                    <td>{vehicle.body_make}</td>
                    <td>{vehicle.body_model}</td>
                    <td>{parseInt(vehicle.body_year)}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <div
            id="pagination"
            className="flex item-center justify-between mt-4"
          >
            <p>Items Per Page:</p>
            <select
              onChange={pageSizeHandeler}
              ref={pageSizeRef}
              name="page-items"
              id="page-items"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
            <p className="mb-4">
              current page: {vehicles?.currentPage} of {vehicles?.totalPages}
            </p>
            <div id="arrow-btns" className="flex gap-4 mr-8">
              <FaArrowLeft className="cursor-pointer" onClick={prevPage} />
              <FaArrowRight className="cursor-pointer" onClick={nextPage} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DisplayVehicles;
