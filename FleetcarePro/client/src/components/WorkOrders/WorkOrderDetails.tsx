import { data, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const dotenv = import.meta.env;

const WorkOrderDetails = () => {
  const [workOrders, setWorkOrders] = useState([]);
  const { id } = useParams();

  const getWorkOrderById = async () => {
    const response = await axios.get(`${dotenv.VITE_API_URL}/workorders/${id}`);
    const data = await response;
    setWorkOrders(data.data.w_o);
  };

  useEffect(() => {
    getWorkOrderById();
    console.log(workOrders);
  }, []);

  return (
    <div>
      {workOrders && (
        <div className="mt-6 mx-6">
          <h1 className="text-lg mb-2">
            {workOrders?.vehicle?.vehicle_class}
            <span className="ml-2 border p-2 font-bold rounded-md">
              {workOrders?.vehicle?.bus_no}
            </span>
          </h1>
          <p>Work Order Number: {workOrders?.workOrderNumber}</p>
          <p>Shop{workOrders?.assignedShop}</p>
          <p>data in {workOrders?.createdAt}</p>
          <p>Fault: {workOrders?.issueReported}</p>
          <p>Notes:</p>
          <textarea className="border w-full" />
        </div>
      )}
    </div>
  );
};

export default WorkOrderDetails;
