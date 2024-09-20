import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 fixed w-full top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          MonLogo
        </div>
        <div className='flex space-x-4'>
        <p className='text-white'>Movie</p>
        <p className='text-white'>Ticket</p>
        <p className='text-white'>Connexion</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
