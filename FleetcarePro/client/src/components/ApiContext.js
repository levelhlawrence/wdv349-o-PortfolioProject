import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
import axios from "axios";
// Access environment variables directly from import.meta.env
const ApiContext = createContext(null);
export const ApiProvider = ({ children }) => {
    // ALL STATES
    const [allWorkOrders, setAllWorkOrders] = useState({});
    const [vehicles, setVehicles] = useState(null);
    const [vehicleDetails, setVehicleDetails] = useState(null);
    // ** <---------- VEHICLE APIS BELOW**** ---------->**
    //@GET ALL VEHICLES
    const getAllVehicles = async (page = 1, pageSize = 10) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/vehicles?page=${page}&limit=${pageSize}`);
            setVehicles(response.data);
            console.log("All vehicles:", response.data);
        }
        catch (error) {
            console.error("Error fetching vehicles:", error);
        }
    };
    // @GET VEHICLE BY ID
    const getVehicleById = async (id) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/vehicles/${id}`);
            setVehicleDetails(response.data);
        }
        catch (error) {
            console.error("Error fetching vehicle:", error);
        }
    };
    // ** <---------- WORK_ORDER APIS BELOW ----------> **
    // @GET WORK_ORDER
    const getAllWorkOrders = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/workorders`);
            const data = await response.data;
            setAllWorkOrders(data);
        }
        catch (error) {
            console.error("Error fetching work orders:", error);
        }
    };
    // @GET WORK_ORDER BY ID
    // @POST WORK_ORDER
    // @DELETE WORK_ORDER
    return (_jsx(ApiContext.Provider, { value: {
            getAllVehicles,
            getVehicleById,
            getAllWorkOrders,
            allWorkOrders,
            vehicles,
            vehicleDetails,
        }, children: children }));
};
export const useApi = () => {
    return useContext(ApiContext);
};
