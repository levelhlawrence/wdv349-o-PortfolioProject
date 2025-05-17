import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoIosSearch } from "react-icons/io";
import { useRef, useState } from "react";
import { useApi } from "../components/ApiContext";
//  import components
import DisplayVehicles from "../components/FleetComponents/DisplayVehicles";
export default function Fleet() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const vehFilterSelect = useRef(null);
    const { vehicles, getAllVehicles } = useApi();
    // next page
    const nextPage = () => {
        if (vehicles?.totalPages !== undefined && page < vehicles?.totalPages) {
            setPage(page + 1);
        }
        return;
    };
    // previous page
    const prevPage = () => {
        if (vehicles?.totalPages !== undefined && page > 1) {
            setPage(page - 1);
        }
    };
    return (_jsxs("section", { id: "fleet-page", className: "relative md:ml-64 z-10", children: [_jsxs("div", { id: "fleet-headed", className: "border-b-2 flex justify-between px-8 items-center py-4", children: [_jsx("h1", { className: "text-xl font-semibold tracking-wide", children: "Fleet Vehicles" }), _jsx("button", { className: "bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-md font-light text-sm", children: "Add Vehicle" })] }), _jsx("form", { children: _jsxs("div", { className: "px-6 flex items-center flex-row md:items-center gap-4 pt-12", children: [_jsxs("div", { id: "search-bar", className: "flex border-gray-300 border rounded-md px-3 py-1 items-center w-fit", children: [_jsx(IoIosSearch, { className: "mr-2", size: 20 }), _jsx("input", { placeholder: "Search", className: "border w-full border-none", type: "text" })] }), _jsxs("select", { ref: vehFilterSelect, className: "border-gray-300 border rounded-md p-1", name: "vehicles", id: "vehicles", children: [_jsx("option", { value: "all_vehicles", children: "All Vehicles" }), _jsx("option", { value: "all_vehicles", children: "Buses Only" }), _jsx("option", { value: "all_vehicles", children: "White Fleet Only" })] })] }) }), _jsx("aside", { id: "veh-search-results", className: "px-6 mt-8", children: _jsx(DisplayVehicles, { nextPage: nextPage, prevPage: prevPage, page: page, pageSize: Number(pageSize), setPageSize: setPageSize, vehicles: vehicles, getAllVehicles: getAllVehicles }) })] }));
}
