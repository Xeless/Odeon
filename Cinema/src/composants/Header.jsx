import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 fixed w-full top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
        L'Odéon
        </div>
        <div className='flex space-x-4'>
        <Link to="/movie" className='text-white'>Movie</Link>
        <Link to="/ticket" className="text-white">Ticket</Link>
        <p className='text-white'>Connexion</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
