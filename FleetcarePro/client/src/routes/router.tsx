import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import WorkOrder from "../pages/WorkOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WorkOrder />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);
