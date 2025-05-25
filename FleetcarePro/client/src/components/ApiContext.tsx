import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

// Access environment variables directly from import.meta.env

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
  const [vehicleDetails, setVehicleDetails] = useState(null);

  // ** <---------- VEHICLE APIS BELOW**** ---------->**

  //@GET ALL VEHICLES
  const getAllVehicles = async (
    page: number = 1,
    pageSize: number = 10
  ): Promise<void> => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/vehicles?page=${page}&limit=${pageSize}`
      );
      setVehicles(response.data);
      return;
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  // @GET VEHICLE BY ID
  const getVehicleById = async (id: string | number): Promise<void> => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/vehicles/${id}`
      );
      const data = await response.data;
      setVehicleDetails(data);
    } catch (error) {
      console.error("Error fetching vehicle:", error);
    }
  };

  // ** <---------- WORK_ORDER APIS BELOW ----------> **

  // @GET WORK_ORDER
  const getAllWorkOrders = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/workorders`
      );
      const data = await response.data;
      setAllWorkOrders(data);
    } catch (error) {
      console.error("Error fetching work orders:", error);
    }
  };

  // @GET WORK_ORDER BY ID

  // @POST WORK_ORDER

  // @DELETE WORK_ORDER

  return (
    <ApiContext.Provider
      value={{
        getAllVehicles,
        getVehicleById,
        getAllWorkOrders,
        allWorkOrders,
        vehicles,
        vehicleDetails,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
