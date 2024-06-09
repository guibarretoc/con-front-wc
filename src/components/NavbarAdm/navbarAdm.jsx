import React, { useEffect, useState } from "react";
import "../NavbarAdm/navbarAdm.css"
import fotoPerfil from "../../assets/Login/perfil.png"
import { useNavigate } from "react-router-dom";
import getAdminData from './../../services/admin/getAdminData';
import AdminHome from './../../pages/AdminHome';

const NavbarAdm = () => {
    const navigate = useNavigate();

    const handleCadastroClick = () => {
        navigate("/cadastroColaborador")    
    }

    const getAdminInfo = async() => {
        try {
            let adminName = await getAdminData(sessionStorage.getItem("userId"))
            if (adminName) {
                sessionStorage.setItem("username", adminName);
            }
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        getAdminInfo();
    }, []);

    return (
        <div>
            <nav className={"menuAdm-content"}>
                <div className={"menuAdm"}>
                    <h2 id={"logo"}>WayClient</h2>

                    <div className={"textosAdm"}>
                        <h3>Tickets</h3>
                        <h3 onClick={handleCadastroClick}>Cadastro</h3>
                        <h3>Histórico</h3>
                    </div>
                    <div className={"busca"}>
                        <input type="text" id="busca" placeholder={"Buscar"} />
                    </div>

                </div>
                <div className={"perfil"}>
                    <img className="foto-perfil" />
                    <h3>{sessionStorage.getItem("username")}</h3>
                </div>

            </nav>
            <div className={"menuAdm2"}>
                <h4>Monitoramento</h4>
                <h4>Horário de Atendimento</h4>
                <h4>Central de Ajuda</h4>
                <h4>Página de Contato</h4>
            </div>
        </div>
    )
}

export default NavbarAdm