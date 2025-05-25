import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// importing pages
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Settings from "@/pages/Settings";
import WorkOrders from "@/pages/WorkOrders";
import Fleet from "@/pages/Fleet";
import Parts from "@/pages/Parts";
import Work from "@/pages/Work";
import Calendar from "@/pages/Calendar";
// import components
import Footer from "./components/Footer";
import NavBar from "./components/NarBar";
import FleetDetails from "@/components/FleetComponents/FleetDetails";

// import context
import { ApiProvider } from "./components/ApiContext";

function App() {
  const location = useLocation();
  const [isLoggedIn] = useState(true);

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [_, setIsLoggedIn] = useState(true);

  const hideNavBar = location.pathname === "/login";
  return (
    <ApiProvider>
      {!hideNavBar && isLoggedIn && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Auth Routes */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        {/* Work Order Routes */}
        <Route path="workorders" element={<WorkOrders />} />
        {/* Fleet Routes */}
        <Route path="fleet" element={<Fleet />} />
        <Route path="fleet/:id" element={<FleetDetails />} />
        {/* Calendar */}
        <Route path="calendar" element={<Calendar />} />
        {/* Work Routes */}
        <Route path="work" element={<Work />} />
        {/* Parts Routes */}
        <Route path="parts" element={<Parts />} />
        {/* Settings Routes */}
        <Route path="settings" element={<Settings />} />
      </Routes>
      {!hideNavBar && <Footer />}
    </ApiProvider>
  );
}

export default App;
