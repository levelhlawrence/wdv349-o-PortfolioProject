import { useEffect, useState } from "react";
import axios from "axios";
const dotenv = import.meta.env;
import { useNavigate } from "react-router-dom";

export const ShowAllWorkOrders = () => {
  const navigate = useNavigate();
  const [allWorkOrders, setAllWorkOrders] = useState({});

  //@GET ALL WORK ORDERS
  const getAllWorkOrders = async () => {
    try {
      const response = await axios.get(`${dotenv.VITE_API_URL}/workorders`);
      const data = await response.data;
      setAllWorkOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  // OPEN W/O
  const openWorkOrders = (e) => {
    navigate(e.currentTarget.id);
    console.log(e.currentTarget.id);
  };

  useEffect(() => {
    getAllWorkOrders();
  }, []);

  return (
    <article>
      <p className="text-sm my-4">Total: {allWorkOrders?.w_o?.length}</p>
      <table className="min-w-full text-center border border-emerald-600 border-collapse">
        <thead>
          <tr className="bg-emerald-400">
            <th className="px-4 py-2 border border-emerald-600">Work Order</th>
            <th className="px-4 py-2 border border-emerald-600">Bus</th>
            <th className="px-4 py-2 border border-emerald-600">Priority</th>
            <th className="px-4 py-2 border border-emerald-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {allWorkOrders &&
            allWorkOrders?.w_o?.map((workorder) => {
              return (
                <tr
                  onClick={openWorkOrders}
                  className="border border-emerald-600 hover:cursor-pointer hover:bg-emerald-100 hover:font-medium"
                  key={workorder._id}
                  id={workorder._id}
                >
                  <td className="px-4 py-2 border border-emerald-600">
                    {workorder.workOrderNumber}
                  </td>
                  <td className="px-4 py-2 border border-emerald-600">
                    {workorder.vehicle.bus_no}
                  </td>
                  <td className="px-4 py-2 border border-emerald-600">
                    {workorder.priority}
                  </td>
                  <td className="px-4 py-2 border border-emerald-600">
                    {workorder.status}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </article>
  );
};
