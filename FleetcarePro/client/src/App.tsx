import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// importing pages
import WorkOrder from "@/pages/WorkOrder.tsx";
import Login from "@/pages/Login.tsx";
import Settings from "@/pages/Settings.tsx";
import NavBar from "@/components/NarBar.tsx";

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const hideNavBar = location.pathname === "/login";
  return (
    <div>
      {!hideNavBar && isLoggedIn && <NavBar />}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<WorkOrder />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
