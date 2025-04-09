import { Routes, Route } from "react-router-dom";
// importing pages
import WorkOrder from "@/pages/WorkOrder.tsx";
import Login from "@/pages/Login.tsx";
import Settings from "@/pages/Settings.tsx";
import NavBar from "@/components/NarBar.tsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
      <NavBar />
      <Routes>
        <Route index element={<WorkOrder />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
