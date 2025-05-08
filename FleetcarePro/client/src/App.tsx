import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// importing pages
import Home from "@/pages/Home";
import Login from "@/pages/Login.tsx";
import SignUp from "@/pages/SignUp";
import Settings from "@/pages/Settings.tsx";
import WorkOrders from "@/pages/WorkOrders.tsx";
import Fleet from "@/pages/Fleet.tsx";
// import components
import Footer from "./components/Footer";
import NavBar from "@/components/NarBar.tsx";
import WorkOrderDetails from "@/components/WorkOrders/WorkOrderDetails";
import FleetDetails from "@/components/FleetComponents/FleetDetails";

// import context
import { ApiProvider } from "./components/ApiContext";

function App() {
  const location = useLocation();
  const [isLoggedIn] = useState(true);
  // Unused variable causing eslint build error
  // Temporarily disabling eslint rule

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [_, setIsLoggedIn] = useState(true);

  const hideNavBar = location.pathname === "/login";
  return (
    <ApiProvider>
      {!hideNavBar && isLoggedIn && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        {/* work order routes */}
        <Route path="workorders" element={<WorkOrders />} />
        <Route path="workorders/:id" element={<WorkOrderDetails />} />

        {/* <Route path="/workorders/create" element={<CreateWorkOrder />} /> */}
        {/* <Route path="/workorders/edit/:id" element={<EditWorkOrder />} /> */}
        {/* <Route path="/workorders/delete/:id" element={<DeleteWorkOrder />} /> */}
        {/* <Route path="/workorders/print/:id" element={<PrintWorkOrder />} /> */}
        <Route path="calendar" element={<Home />} />
        {/* Fleet Routes */}
        <Route path="fleet" element={<Fleet />} />
        <Route path="fleet/:id" element={<FleetDetails />} />
        <Route path="parts" element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
      {!hideNavBar && <Footer />}
    </ApiProvider>
  );
}

export default App;
