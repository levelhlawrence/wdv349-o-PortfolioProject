import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import fleetCareLogo from "../assets/maintLogo1.svg";
import { useState, useEffect } from "react";
import { navRoutes } from "../utils/routes";
import { IoMenuOutline, IoClose } from "react-icons/io5";
export default function NarBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenuHandler = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        if (window.innerWidth > 768) {
            setIsOpen(true);
        }
    }, []);
    return (_jsxs("nav", { className: "bg-gray-200 flex justify-between px-6 items-center py-4 md:absolute md:flex-col md:h-full md:w-64", children: [_jsxs("div", { id: "bus-logo", className: "flex items-center ", children: [_jsx("img", { className: "invert w-10 mr-2", src: fleetCareLogo, alt: "bus icon" }), _jsxs("h1", { className: "text-2xl", children: [_jsx("span", { className: "font-bold", children: "Fleet" }), "Care", _jsx("span", { className: "font-bold text-emerald-500", children: "Pro" })] })] }), window.innerWidth <= 768 && (_jsx("div", { onClick: toggleMenuHandler, children: !isOpen ? _jsx(IoMenuOutline, { size: 42 }) : _jsx(IoClose, { size: 42 }) })), isOpen && (_jsx("ul", { className: "absolute z-50 flex flex-col justify-between py-10 px-8 top-16 md:top-32 right-0 bg-gray-200 [&_*]:bg-gray-100 [&_*]:py-1 [&_*]:px-1 [&_*]:rounded-lg md:bg-transparent w-full h-1/2 p-4 rounded-lg shadow-lg md:shadow-none md:[&_*]:bg-inherit", children: navRoutes.map((route) => {
                    return (_jsx("li", { children: _jsxs("a", { className: "flex items-center gap-4", href: route.href, children: [route.icon, route.name.charAt(0).toUpperCase() + route.name.slice(1)] }) }, route.name));
                }) }))] }));
}
