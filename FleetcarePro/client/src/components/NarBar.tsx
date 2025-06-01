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

  return (
    <nav className="bg-gray-200 flex justify-between px-6 items-center py-4 md:absolute md:flex-col md:h-full md:w-64 ">
      <div id="bus-logo" className="flex items-center ">
        <img className="invert w-10 mr-2" src={fleetCareLogo} alt="bus icon" />
        <h1 className="text-2xl">
          <span className="font-bold">Fleet</span>Care
          <span className="font-bold text-emerald-500">Pro</span>
        </h1>
      </div>

      {/* mobile toggle button */}
      {window.innerWidth <= 768 && (
        <div onClick={toggleMenuHandler}>
          {!isOpen ? <IoMenuOutline size={42} /> : <IoClose size={42} />}
        </div>
      )}

      {/* Nav Links  */}
      {isOpen && (
        <ul className="absolute z-50 flex flex-col justify-between py-10 px-8 top-16 md:top-32 right-0 bg-gray-200 [&_*]:bg-gray-100 [&_*]:py-1 [&_*]:px-1 [&_*]:rounded-lg md:bg-transparent w-full h-1/2 p-4 rounded-lg shadow-lg md:shadow-none md:[&_*]:bg-inherit">
          {navRoutes.map((route) => {
            return (
              <li key={route.name}>
                <a className="flex items-center gap-4" href={route.href}>
                  {route.icon}
                  {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
