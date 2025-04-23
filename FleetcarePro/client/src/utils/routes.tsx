import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { FaBus } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";

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
];
