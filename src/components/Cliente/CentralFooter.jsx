import React from 'react';
import twitterLogo from "../../assets/Home/twitter.png";
import instagramLogo from "../../assets/Home/instagram.png";
import facebookLogo from "../../assets/Home/facebook.png";

const CentralFooter = () => {
    return (
        <footer className="text-white mt-8">
            <div className="bg-[#379E53] rodape flex justify-around text-center pt-24 px-4 h-64">
                <div className="col1 flex flex-col items-center">
                    <h3 className="font-semibold mb-4 text-center">Institucional</h3>
                    <ul className="list-none flex flex-col text-left">
                        <li><a href="#" className="text-white">Sobre</a></li>
                        <li><a href="#" className="text-white">Contato</a></li>
                        <li><a href="#" className="text-white">Política de Privacidade</a></li>
                        <li><a href="#" className="text-white">Termos de Uso</a></li>
                    </ul>
                </div>
                <div className="col2 flex flex-col items-center">
                    <h3 className="font-semibold mb-4">Atendimento</h3>
                    <ul className="list-none text-center">
                        <li>Segunda à Sexta das 8 às 18h</li>
                        <li>(81) 99999-9999</li>
                    </ul>
                </div>
                <div className="col3 flex flex-col items-center">
                    <h3 className="font-semibold mb-4">Nossas Redes</h3>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="w-8 h-8 bg-contain bg-center bg-no-repeat">
                            <img src={twitterLogo} alt="Twitter Logo" className="w-full h-full" />
                        </a>
                        <a href="#" className="w-8 h-8 bg-contain bg-center bg-no-repeat">
                            <img src={instagramLogo} alt="Instagram Logo" className="w-full h-full" />
                        </a>
                        <a href="#" className="w-8 h-8 bg-contain bg-center bg-no-repeat">
                            <img src={facebookLogo} alt="Facebook Logo" className="w-full h-full" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default CentralFooter;
