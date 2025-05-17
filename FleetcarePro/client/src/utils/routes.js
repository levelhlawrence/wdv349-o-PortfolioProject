import { jsx as _jsx } from "react/jsx-runtime";
import { IoHome } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { FaBus } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
export const navRoutes = [
    {
        name: "home",
        icon: _jsx(IoHome, { size: 30 }),
        href: "/",
    },
    {
        name: "fleet",
        icon: _jsx(FaBus, { size: 30 }),
        href: "/fleet",
    },
    {
        name: "workorders",
        icon: _jsx(IoNewspaperOutline, { size: 30 }),
        href: "/workorders",
    },
    {
        name: "calendar",
        icon: _jsx(FaRegCalendarAlt, { size: 30 }),
        href: "/calendar",
    },
    {
        name: "work",
        icon: _jsx(FaDisplay, { size: 30 }),
        href: "/work",
    },
    {
        name: "parts",
        icon: _jsx(FaCreditCard, { size: 30 }),
        href: "/parts",
    },
];
