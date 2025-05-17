import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// importing pages
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Settings from "@/pages/Settings";
import WorkOrders from "@/pages/WorkOrders";
import Fleet from "./pages/Fleet";
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
        {/* auth routes */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        {/* work order routes */}
        <Route path="workorders" element={<WorkOrders />} />

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
