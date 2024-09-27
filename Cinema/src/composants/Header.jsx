import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../hooks/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Obtenez les informations de l'utilisateur et la fonction de déconnexion

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="p-4 fixed w-full top-0 z-10">
      <nav className="mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-white font-bold" : "text-gray-400")}>
            <img src="../../public/uploads/logo.svg" alt="Logo" width={50} height={50} className="mr-2" />
          </NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-white font-bold" : "text-gray-400")}>
            Movie
          </NavLink>
        </div>
        <div className="flex space-x-4">
          {!user ? (
            <NavLink to="/login" className={({ isActive }) => (isActive ? "text-white font-bold" : "text-gray-400")}>
              Créer un compte
            </NavLink>
          ) : (
            <div className="relative inline-block bg-red-50 rounded-full" ref={menuRef}>
              <div className="cursor-pointer" onClick={toggleMenu}>
                <img
                  src={user.picture || "../../public/uploads/defaultUser.png"}
                  alt="User"
                  width="30"
                  height="30"
                  className="rounded-full"
                />
              </div>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <NavLink to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </NavLink>
                    <NavLink to="/ticket" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Tickets
                    </NavLink>
                    <NavLink to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </NavLink>
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
