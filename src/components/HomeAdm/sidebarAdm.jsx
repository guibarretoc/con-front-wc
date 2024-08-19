import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import setaCima from "../../assets/HomeAdm/setaCima.png";
import setaBaixo from "../../assets/HomeAdm/setaBaixo.png";

const SidebarAdm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="sidebar bg-[#F9F6EE] flex flex-col p-4 shadow-md  fixed bottom-0 left-0 z-10 w-full md:w-1/3 lg:w-1/4 h-auto md:h-screen">
      <div className="flex flex-col space-y-4 mt-8 md:mt-36">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">Departamento Financeiro</h2>
          <img
            src={isOpen ? setaCima : setaBaixo}
            alt="toggle menu"
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
        {isOpen && (
          <div className="text-sm text-gray-600">
            <p>Situação dos tickets</p>
            <p>Abertos: </p>
            <p>Em atendimento: </p>
            <p>Fechados: </p>
          </div>
        )}
        {isOpen && (
          <div>
            <h3 className="font-bold text-sm">Membros do departamento</h3>
            <ul className="space-y-2 mt-2">
              <li className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-red-500 text-white rounded-full text-center">
                  JD
                </span>
                <span>José Durval</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full text-center">
                  KS
                </span>
                <span>Karen Silva</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-purple-500 text-white rounded-full text-center">
                  MV
                </span>
                <span>Mateus Veras</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default SidebarAdm;
