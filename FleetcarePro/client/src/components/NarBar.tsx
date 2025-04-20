import fleetCareLogo from "../assets/maintLogo1.svg";
import React, { useState, useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";

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

  return (
    <nav className="bg-gray-200 flex justify-between px-6 items-center py-4 md:absolute md:flex-col md:h-full">
      <div id="bus-logo" className="flex items-center ">
        <img className="invert w-10 mr-2" src={fleetCareLogo} alt="bus icon" />
        <h1 className="text-2xl">
          <span className="font-bold">Fleet</span>Care
          <span className="font-bold">Pro</span>
        </h1>
      </div>
      {window.innerWidth <= 768 && (
        <div onClick={toggleMenuHandler}>
          {!isOpen ? <IoMenuOutline size={42} /> : <IoClose size={42} />}
        </div>
      )}

      {isOpen && (
        <ul className="absolute flex flex-col justify-between py-10 px-8 top-16 md:top-32 right-0 bg-gray-200 [&_*]:bg-gray-100 [&_*]:py-1 [&_*]:px-1 [&_*]:rounded-lg md:bg-transparent w-full h-1/2 p-4 rounded-lg shadow-lg md:shadow-none md:[&_*]:bg-inherit">
          <li>
            <a className="flex items-center gap-4" href="/">
              <IoHome size={30} />
              Home
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4" href="/">
              <FaRegCalendarAlt size={30} />
              Calendar
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4" href="/">
              <FaCreditCard size={30} />
              Parts
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4" href="/">
              <FaDisplay size={30} />
              Work
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
