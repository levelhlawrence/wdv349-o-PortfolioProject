import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useApi } from "../../components/ApiContext";
const ShowAllWorkOrders = () => {
    const { getAllWorkOrders, allWorkOrders } = useApi();
    useEffect(() => {
        setTimeout(() => {
            getAllWorkOrders();
        }, 1000);
        console.log(allWorkOrders);
    }, []);
    return (_jsx("article", { children: _jsx("section", { className: "px-6", children: _jsxs("table", { className: "table-auto w-full text-left", children: [_jsx("thead", { className: "text-gray-600", children: _jsxs("tr", { className: "bg-gray-200 text-sm ", children: [_jsx("th", { className: "p-1 rounded-tl", children: "W/O Number" }), _jsx("th", { children: "Status" }), _jsx("th", { children: "Description" }), _jsx("th", { className: "rounded-tr", children: "Created At" })] }) }), _jsx("tbody", { className: "text-sm", children: allWorkOrders.length > 0 &&
                            allWorkOrders?.map((workorder) => {
                                return (_jsxs("tr", { className: "border-b-2 border-gray-200 hover:border-emerald-400 hover:text-emerald-600", children: [_jsx("td", { children: workorder.workOrderNumber }), _jsx("td", { children: workorder.status }), _jsx("td", { children: workorder.notes }), _jsx("td", { children: workorder.priority })] }, workorder.workOrderNumber));
                            }) })] }) }) }));
};
export default ShowAllWorkOrders;
