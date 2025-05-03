import { createContext, useContext, useState, useEffect } from "react";
import { ReactNode } from 'react'; // to get ApiProvider to work
import axios from "axios";
const dotenv = import.meta.env;

// const ApiContext = createContext();
// This is a temporary workaround — eventually you’ll want 
// to replace any with a proper type (e.g., an interface describing your context state).
const ApiContext = createContext<any>(null as any); // Temporarily set to any type

// export const ApiProvider = ({ children }) => {
// ReactNode is the correct type for anything that can be rendered in JSX, 
// including strings, numbers, elements, and fragments.
// This tells TypeScript what children is, avoiding the implicit any.
export const ApiProvider = ({ children }: { children: ReactNode }) => {
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
