import React from 'react';
import "./membrosdep.css";
import profilePic from "../../assets/Login/perfil.png";

const Membrosdep = ({ employee }) => {
  return (
    <div className="flex items-center pr-4">
      <div className="w-6 lg:w-8">
        <img src={profilePic} alt="Perfil" />
      </div>
      <p className="text-black pl-2 text-xs md:text-sm lg:text-base">{employee.name}</p>
    </div>
  );
}

export default Membrosdep;
