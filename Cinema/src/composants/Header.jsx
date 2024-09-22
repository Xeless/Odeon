import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 fixed w-full top-0 z-10">
      <nav className=" mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-gray-400"
            }
          >
            <img
              src="../../public/uploads/logo.svg"
              alt=""
              width={50}
              height={50}
              className="mr-2"
            />
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-gray-400"
            }
          >
            Movie
          </NavLink>
        </div>
        <div className="flex space-x-4">
          <NavLink
            to="/Ticket"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-gray-400"
            }
          >
            Ticket
          </NavLink>
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              isActive ? "text-white text-bold" : "text-gray-400"
            }
          >
            Créer un compte
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;