import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

const dotenv = import.meta.env;

const ApiContext = createContext<any>(null as any);
type AllVehiclesData = {
  totalPages: number;
  totalItems: number;
  currentPage: number;
  vehicles: Vehicle[]; // Define `Vehicle` if needed
};
type Vehicle = {
  bus_no: string;
  body_make: string;
  body_model: string;
  body_year: string;
};

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  // ALL STATES
  const [allWorkOrders, setAllWorkOrders] = useState({});
  const [vehicles, setVehicles] = useState<AllVehiclesData | null>(null);

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
