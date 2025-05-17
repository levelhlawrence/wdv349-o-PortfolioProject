import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const DisplayVehicles = ({ nextPage, prevPage, page, pageSize, setPageSize, vehicles, getAllVehicles, }) => {
    const pageSizeRef = useRef(null);
    const navigate = useNavigate();
    // page size selector
    const pageSizeHandler = () => {
        const value = pageSizeRef.current?.value;
        if (value) {
            setPageSize(Number(value));
        }
    };
    // redirect to vehicle detail page
    const vehicleDetailsHandler = (e) => {
        const id = e.currentTarget.id;
        navigate("./" + id);
    };
    useEffect(() => {
        getAllVehicles(page, pageSize);
    }, [page, pageSize]);
    return (_jsx("div", { children: vehicles && (_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between mb-2 items-center", children: [_jsxs("p", { children: ["Total Vehicles:", " ", _jsx("span", { className: "font-bold text-emerald-600", children: vehicles?.totalItems })] }), _jsxs("p", { className: "text-sm", children: ["current page: ", vehicles?.currentPage, " of ", vehicles?.totalPages] })] }), _jsxs("table", { className: "table-auto w-full text-left", children: [_jsx("thead", { className: "text-gray-600", children: _jsxs("tr", { className: "bg-gray-200 text-sm ", children: [_jsx("th", { className: "p-1 rounded-tl", children: "Veh No." }), _jsx("th", { children: "Make" }), _jsx("th", { children: "Model" }), window.innerWidth > 800 && _jsx("th", { children: "Vin" }), _jsx("th", { className: "rounded-tr", children: "Year" })] }) }), vehicles?.data?.map((vehicle) => {
                            return (_jsx("tbody", { onClick: vehicleDetailsHandler, id: vehicle.bus_no, className: "text-sm hover:bg-emerald-50 ", children: _jsxs("tr", { className: "border-b-2 border-gray-200 hover:border-emerald-400 hover:text-emerald-600 hover:cursor-pointer", children: [_jsxs("td", { className: "py-2 flex items-center gap-2", children: [_jsx(IoNewspaperOutline, {}), vehicle.bus_no] }), _jsx("td", { children: vehicle.body_make }), _jsx("td", { children: vehicle.body_model }), window.innerWidth > 800 && _jsx("td", { children: vehicle.vin_number }), _jsx("td", { children: parseInt(vehicle.body_year) })] }) }, vehicle.bus_no));
                        })] }), _jsxs("div", { id: "pagination", className: "flex item-center justify-between mt-4", children: [_jsxs("div", { className: "flex items-center text-sm", children: [_jsx("p", { children: "Items Per Page:" }), _jsxs("select", { onChange: pageSizeHandler, className: "border-2 ml-2 w-16 rounded", ref: pageSizeRef, name: "page-items", id: "page-items", children: [_jsx("option", { value: "10", children: "10" }), _jsx("option", { value: "20", children: "20" }), _jsx("option", { value: "30", children: "30" })] })] }), _jsxs("div", { id: "arrow-btns", className: "flex gap-4 mr-8", children: [page > 1 && (_jsxs("button", { className: "cursor-pointer flex items-center border rounded gap-4 p-1 hover:bg-gray-200 text-gray-600", onClick: prevPage, children: [_jsx(FaArrowLeft, {}), "Prev"] })), page !== vehicles.totalPages && (_jsxs("button", { className: "cursor-pointer flex items-center border rounded gap-4 p-1 hover:bg-gray-200 text-gray-600", onClick: nextPage, children: ["Next", _jsx(FaArrowRight, {})] }))] })] })] })) }));
};
export default DisplayVehicles;
