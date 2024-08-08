import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div>
      <nav className="bg-[#379E53] text-white font-bold">
        <div className="flex justify-between items-center h-full py-4 px-16">
          <h2 className="text-4xl font-bold cursor-pointer" onClick={handleLogoClick}>
            WayClient
          </h2>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
