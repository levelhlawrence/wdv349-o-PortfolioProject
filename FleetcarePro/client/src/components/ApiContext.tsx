import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const dotenv = import.meta.env;

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [allWorkOrders, setAllWorkOrders] = useState({});
  const text = "Hello from Context!";
  const text2 = "Hello from Context number 2!";

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

  useEffect(() => {
    getAllWorkOrders();
  }, []);

  return (
    <ApiContext.Provider value={{ text, text2, allWorkOrders }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
