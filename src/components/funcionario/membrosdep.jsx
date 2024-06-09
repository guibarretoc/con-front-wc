import React from 'react';
import "./membrosdep.css";
import profilePic from "../../assets/Login/perfil.png";

const Membrosdep = ({ employee }) => {
  return (
    <div className="fun-departamento">
      <div className="departamento-fun">
        {/* <img src={profilePic} alt="Perfil" /> */}
      </div>
      <p className="nome-fun">{employee.name}</p>
    </div>
  );
}

export default Membrosdep;
