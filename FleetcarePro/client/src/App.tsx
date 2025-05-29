import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// pages
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Settings from "@/pages/Settings";
import WorkOrders from "@/pages/WorkOrders";
import Fleet from "@/pages/Fleet";
import Parts from "@/pages/Parts";
import Work from "@/pages/Work";
import Calendar from "@/pages/Calendar";

// components
import Footer from "./components/Footer";
import NavBar from "./components/NarBar";
import FleetDetails from "@/components/FleetComponents/FleetDetails";

// context
import { ApiProvider } from "./components/ApiContext";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/check`,
          { withCredentials: true }
        );
        if (res.data.isAuthenticated) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          navigate("/login");
        }
      } catch {
        setIsLoggedIn(false);
        navigate("/login");
      }
    };

    checkAuth();
  }, [isLoggedIn]);

  const hideNavBar = location.pathname === "/login";

  if (isLoggedIn === null) return <p>Loading...</p>;

  return (
    <ApiProvider>
      {!hideNavBar && isLoggedIn && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="workorders" element={<WorkOrders />} />
        <Route path="fleet" element={<Fleet />} />
        <Route path="fleet/:id" element={<FleetDetails />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="work" element={<Work />} />
        <Route path="parts" element={<Parts />} />
        <Route path="settings" element={<Settings />} />
      </Routes>

      {!hideNavBar && <Footer />}
    </ApiProvider>
  );
}

export default App;
