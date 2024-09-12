import React from "react";
import "tailwindcss/tailwind.css";
import coment from "../../assets/Home/coment.png";
import pen from "../../assets/Home/pen.png";
import light from "../../assets/Home/light.png";

const Footer = () => {
    return (
        <footer className="bg-[#83B791] py-4 flex flex-col md:flex-row justify-end items-center px-4">
            <section className="titulo mb-4 md:mb-0">
                <h5 className="text-white text-sm sm:text-base md:text-xl font-bold mr-8 ">
                    Por que o WayClient?
                </h5>
            </section>
            <div className="w-full overflow-x-auto">
                <section className="caixas-content flex flex-row justify-center items-center space-x-4 min-w-[800px]">
                    <div className="caixa bg-white w-full sm:w-48 md:w-64 text-center p-2 sm:p-3 md:p-4 rounded-2xl shadow-md">
                        <div className="flex justify-center mb-2">
                            <img className="object-cover object-center h-6 sm:h-8 md:h-10" src={coment} alt="ícone" />
                        </div>
                        <h4 className="text-[#379E53] font-semibold text-xs sm:text-sm md:text-base">Melhorar seu atendimento</h4>
                        <p className="text-[#5B5B5B] text-xs font-bold mt-2">
                            Maximize a eficiência operacional, melhore a satisfação do seu cliente e impulsione o crescimento empresarial.
                        </p>
                    </div>
                    <div className="caixa bg-white w-full sm:w-48 md:w-64 text-center p-2 sm:p-3 md:p-4 rounded-2xl shadow-md">
                        <div className="flex justify-center mb-2">
                            <img className="object-cover object-center h-6 sm:h-8 md:h-10" src={pen} alt="ícone" />
                        </div>
                        <h4 className="text-[#379E53] font-semibold text-xs sm:text-sm md:text-base">Personalização</h4>
                        <p className="text-[#5B5B5B] text-xs font-bold mt-2">
                            Ofereça uma experiência personalizada ao cliente, aumentando sua satisfação e fidelidade.
                        </p>
                    </div>
                    <div className="caixa bg-white w-full sm:w-48 md:w-64 text-center p-2 sm:p-3 md:p-4 rounded-2xl shadow-md">
                        <div className="flex justify-center mb-2">
                            <img className="object-cover object-center h-6 sm:h-8 md:h-10" src={light} alt="ícone" />
                        </div>
                        <h4 className="text-[#379E53] font-semibold text-xs sm:text-sm md:text-base">Eficiência</h4>
                        <p className="text-[#5B5B5B] text-xs font-bold mt-2">
                            Automatiza processos, reduzindo tempo e esforço na gestão de tickets e solicitações.
                        </p>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer
