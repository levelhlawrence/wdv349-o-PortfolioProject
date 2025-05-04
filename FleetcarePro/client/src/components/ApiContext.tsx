import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const dotenv = import.meta.env;

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  // ALL STATES
  const [allWorkOrders, setAllWorkOrders] = useState({});
  const [vehicles, setVehicles] = useState(true);

  // @GET ALL WORKORDERS
  const getAllWorkOrders = async () => {
    try {
      const response = await axios.get(`${dotenv.VITE_API_URL}/workorders`);
      const data = await response.data;
      setAllWorkOrders(data);
    } catch (err) {
      console.log(err);
    }
  };

  // ****VEHICLE APIS BELOW****

  //@GET ALL VEHICLES
  const getAllVehicles = async (page = 1, pageSize = 10) => {
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

  return (
    <ApiContext.Provider value={{ allWorkOrders, getAllVehicles, vehicles }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
