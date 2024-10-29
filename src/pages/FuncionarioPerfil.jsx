import React from "react";
import EmployeeNavbar from "../components/AllNavbars/EmployeeNavbar/EmployeeNavbar";
import FooterFuncionario from "../components/FuncionarioHome/FooterFuncionario";
import PerfilFuncionario from "../components/FuncionarioHome/PerfilFuncionario";

const FuncionarioPerfil = () => {
    return (
        <div>
            <EmployeeNavbar />
            <div className="flex bg-white">
                <div className="space-y-64">
                    <div className="p-12">
                        <PerfilFuncionario />
                    </div>
                    <FooterFuncionario />
                </div>
            </div>
        </div>
    );
};

export default FuncionarioPerfil;
