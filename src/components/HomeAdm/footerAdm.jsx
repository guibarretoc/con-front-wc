import React from "react";
import "tailwindcss/tailwind.css";
import coment from "../../assets/Home/coment.png";
import pen from "../../assets/Home/pen.png";
import light from "../../assets/Home/light.png";

const Footer = () => {
    return (
        <footer className="bg-[#83B791] py-4 flex justify-end items-center px-4">
       
            <section className="titulo">
                <h5 className="text-white text-xl md:text-2xl font-bold mr-8">
                    Por que o WayClient?
                </h5>
            </section>
            
            
            <section className="caixas-content flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="caixa bg-white w-full md:w-64 text-center p-4 rounded-2xl shadow-md">
                    <div className="flex justify-center mb-2">
                        <img className="object-cover object-center h-10" src={coment} alt="ícone" />
                    </div>
                    <h4 className="text-[#379E53] font-semibold text-sm">Melhorar seu atendimento</h4>
                    <p className="text-[#5B5B5B] text-xs font-bold mt-2">
                        Maximize a eficiência operacional, melhore a satisfação do seu cliente e impulsione o crescimento empresarial.
                    </p>
                </div>
                <div className="caixa bg-white w-full md:w-64 text-center p-4 rounded-2xl shadow-md">
                    <div className="flex justify-center mb-2">
                        <img className="object-cover object-center h-10" src={pen} alt="ícone" />
                    </div>
                    <h4 className="text-[#379E53] font-semibold text-sm">Personalização</h4>
                    <p className="text-[#5B5B5B] text-xs font-bold mt-2">
                        Ofereça uma experiência personalizada ao cliente, aumentando sua satisfação e fidelidade.
                    </p>
                </div>
                <div className="caixa bg-white w-full md:w-64 text-center p-4 rounded-2xl shadow-md">
                    <div className="flex justify-center mb-2">
                        <img className="object-cover object-center h-10" src={light} alt="ícone" />
                    </div>
                    <h4 className="text-[#379E53] font-semibold text-sm">Eficiência</h4>
                    <p className="text-[#5B5B5B] text-xs font-bold mt-2">
                        Automatiza processos, reduzindo tempo e esforço na gestão de tickets e solicitações.
                    </p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
