import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs(ApiProvider, { children: [!hideNavBar && isLoggedIn && _jsx(NavBar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "login", element: _jsx(Login, {}) }), _jsx(Route, { path: "signup", element: _jsx(SignUp, {}) }), _jsx(Route, { path: "workorders", element: _jsx(WorkOrders, {}) }), _jsx(Route, { path: "calendar", element: _jsx(Home, {}) }), _jsx(Route, { path: "fleet", element: _jsx(Fleet, {}) }), _jsx(Route, { path: "fleet/:id", element: _jsx(FleetDetails, {}) }), _jsx(Route, { path: "parts", element: _jsx(Home, {}) }), _jsx(Route, { path: "settings", element: _jsx(Settings, {}) })] }), !hideNavBar && _jsx(Footer, {})] }));
}
export default App;
