import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const AllVehicles = () => {
  // show all vehicles by default
  const [allVehicles, setAllVehicles] = useState(true);
  const [page, setPage] = useState(1);

  // get all vehicles
  const getAllVehicles = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api_v1/vehicles?page=${page}`
      );
      setAllVehicles(response.data);
      console.log("All vehicles:", response.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  // next page
  const nextPage = () => {
    if (page < allVehicles?.totalPages) {
      setPage(page + 1);
      getAllVehicles();
    }
  };
  // previous page
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      getAllVehicles();
    }
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  return (
    <div>
      {allVehicles && (
        <div>
          <div id="pagination" className="flex item-center justify-between">
            <p className="mb-2">
              Total Vehicles:{" "}
              <span className="font-bold">{allVehicles?.totalItems}</span>
            </p>
            <div id="arrow-btns" className="flex gap-4 mr-8">
              <FaArrowLeft onClick={prevPage} />
              <FaArrowRight onClick={nextPage} />
            </div>
          </div>
          <p className="mb-4">
            current page: {allVehicles?.currentPage} of{" "}
            {allVehicles?.totalPages}
          </p>
          <table className="table-auto w-full text-left">
            <thead>
              <tr className=" bg-emerald-300">
                <th>Bus No.</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Vin</th>
                <th>Status</th>
              </tr>
            </thead>
            {allVehicles?.vehicles?.map((vehicle) => {
              return (
                <tbody>
                  <tr className="border-b-2 border-emerald-300">
                    <td className="py-2">{vehicle.bus_no}</td>
                    <td>{vehicle.body_make}</td>
                    <td>{vehicle.body_model}</td>
                    <td>{vehicle.body_year}</td>
                    <td>{vehicle.vin_number}</td>
                    <td>{vehicle.status}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};
export default AllVehicles;
