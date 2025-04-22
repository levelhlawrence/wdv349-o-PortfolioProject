import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { FaBus } from "react-icons/fa6";

export const navRoutes = [
  {
    name: "home",
    icon: <IoHome size={30} />,
    href: "/",
  },
  {
    name: "work",
    icon: <FaDisplay size={30} />,
    href: "/workorders",
  },
  {
    name: "calendar",
    icon: <FaRegCalendarAlt size={30} />,
    href: "/calendar",
  },
  {
    name: "fleet",
    icon: <FaBus size={30} />,
    href: "/fleet",
  },
  {
    name: "parts",
    icon: <FaCreditCard size={30} />,
    href: "/parts",
  },
];
