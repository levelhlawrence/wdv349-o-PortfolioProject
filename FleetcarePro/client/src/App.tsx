import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// importing pages
import Home from "@/pages/Home";
import Login from "@/pages/Login.tsx";
import Settings from "@/pages/Settings.tsx";
import NavBar from "@/components/NarBar.tsx";
import WorkOrders from "@/pages/WorkOrders.tsx";

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const hideNavBar = location.pathname === "/login";
  return (
    <div>
      {!hideNavBar && isLoggedIn && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/workorders" element={<WorkOrders />} />
        {/* <Route path="/workorders/:id" element={<WorkOrderDetails />} /> */}
        {/* <Route path="/workorders/create" element={<CreateWorkOrder />} /> */}
        {/* <Route path="/workorders/edit/:id" element={<EditWorkOrder />} /> */}
        {/* <Route path="/workorders/delete/:id" element={<DeleteWorkOrder />} /> */}
        {/* <Route path="/workorders/print/:id" element={<PrintWorkOrder />} /> */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
