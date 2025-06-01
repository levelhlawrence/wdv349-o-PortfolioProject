import { IoHome, IoNewspaperOutline } from "react-icons/io5";
import { FaRegCalendarAlt, FaCreditCard } from "react-icons/fa";
import { FaDisplay, FaBus } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

export const navRoutes = [
  {
    name: "home",
    icon: <IoHome size={30} />,
    href: "/",
  },
  {
    name: "fleet",
    icon: <FaBus size={30} />,
    href: "/fleet",
  },
  {
    name: "workorders",
    icon: <IoNewspaperOutline size={30} />,
    href: "/workorders",
  },
  {
    name: "calendar",
    icon: <FaRegCalendarAlt size={30} />,
    href: "/calendar",
  },
  {
    name: "work",
    icon: <FaDisplay size={30} />,
    href: "/work",
  },
  {
    name: "parts",
    icon: <FaCreditCard size={30} />,
    href: "/parts",
  },
  {
    name: "settings",
    icon: <IoMdSettings size={30} />,
    href: "/settings",
  },
];
