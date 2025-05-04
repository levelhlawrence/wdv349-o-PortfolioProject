import { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";

const DisplayVehicles = ({
  vehFilterSelect,
  nextPage,
  prevPage,
  page,
  pageSize,
  setPageSize,
  vehicles,
  getAllVehicles,
}) => {
  const pageSizeRef = useRef();

  // page size selector
  const pageSizeHandeler = () => {
    setPageSize(pageSizeRef.current.value);
  };

  useEffect(() => {
    getAllVehicles(page, pageSize);
  }, [page, pageSize]);

  return (
    <div>
      {vehicles && (
        <div>
          <div className="flex justify-between mb-2 items-center">
            <p>
              Total Vehicles:{" "}
              <span className="font-bold text-emerald-600">
                {vehicles?.totalItems}
              </span>
            </p>
            <p className="text-sm">
              current page: {vehicles?.currentPage} of {vehicles?.totalPages}
            </p>
          </div>
          <table className="table-auto w-full text-left">
            <thead className="text-gray-600">
              <tr className="bg-gray-200 text-sm ">
                <th className="p-1 rounded-tl">Veh No.</th>
                <th>Make</th>
                <th>Model</th>
                {window.innerWidth > 800 && <th>Vin</th>}
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
                    <div className="flex items-center gap-2">
                      <IoNewspaperOutline />
                      <td className="py-2">{vehicle.bus_no}</td>
                    </div>
                    <td>{vehicle.body_make}</td>
                    <td>{vehicle.body_model}</td>
                    {window.innerWidth > 800 && <td>{vehicle.vin_number}</td>}
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
            <div className="flex items-center text-sm">
              <p>Items Per Page:</p>
              <select
                onChange={pageSizeHandeler}
                className="border-2 ml-2 w-16 rounded"
                ref={pageSizeRef}
                name="page-items"
                id="page-items"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>

            <div id="arrow-btns" className="flex gap-4 mr-8">
              {page > 1 && (
                <button
                  className="cursor-pointer flex items-center border rounded gap-4 p-1 hover:bg-gray-200 text-gray-600"
                  onClick={prevPage}
                >
                  <FaArrowLeft />
                  Prev
                </button>
              )}
              {page !== vehicles.totalPages && (
                <button
                  className="cursor-pointer flex items-center border rounded gap-4 p-1 hover:bg-gray-200 text-gray-600"
                  onClick={nextPage}
                >
                  Next
                  <FaArrowRight />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DisplayVehicles;
