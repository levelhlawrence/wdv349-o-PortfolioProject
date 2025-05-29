import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
        }/vehicles?page=${page}&limit=${pageSize}`,
        { withCredentials: true }
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
        `${import.meta.env.VITE_API_URL}/vehicles/${id}`,
        { withCredentials: true }
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
        `${import.meta.env.VITE_API_URL}/workorders`,
        { withCredentials: true }
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

  // ** <---------- AUTH APIS BELOW ----------> **
  // @POST LOGIN
  const loginUser = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        formData,
        { withCredentials: true }
      );
      navigate("/");
      return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  // @POST REGISTER

  // @POST LOGOUT
  const logout = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        getAllVehicles,
        getVehicleById,
        getAllWorkOrders,
        loginUser,
        logout,
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
