import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 fixed w-full top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl space-x-3">
          <Link to={"/Home"} className='text-white'>L'Odéon</Link>
          <Link to="/movie" className='text-white'>Movie</Link>
        </div>
        <div className='flex space-x-4'>
        <Link to="/ticket" className="text-white">Ticket</Link>
        <Link to="/Connexion" className='text-white'>Cree un compte</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
