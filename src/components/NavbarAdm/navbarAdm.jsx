import React, { useEffect, useState } from "react";
import "../NavbarAdm/navbarAdm.css"
import { useNavigate } from "react-router-dom";
import getAdminData from './../../services/admin/getAdminData';
import "../../assets/Navbar/lupa.png"
import { Link } from "react-router-dom";

const NavbarAdm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogoutClick = () => {
        navigate('/login')
        sessionStorage.clear()
      }

    const handleCadastroClick = () => {
        navigate("/cadastroColaborador")    
    }

    const getAdminInfo = async() => {
        try {
            let adminName = await getAdminData(sessionStorage.getItem("userId"))
            if (adminName) {
                setUsername(adminName);
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
                <Link  to='/' className="link ">  <h2 id={"logo"}>WayClient</h2> </Link>

                    <div className={"textosAdm"}>
                        <h3>Tickets </h3>
                        <h3 onClick={handleCadastroClick}>Cadastro</h3>
                        <h3>Histórico</h3>
                    </div>
                    <div className={"busca"}>
                    
                        <input type="text" id="busca" placeholder={"Buscar"} className="lupa" />
                     
                    </div>

                </div>
                <div className={"perfil"}>
                    <img className="foto-perfil" />
                    <h3>{sessionStorage.getItem("username") != null ? sessionStorage.getItem("username") : username}</h3>
                    <div className="adm-dropdown-toggle" onClick={toggleDropdown}>
                        {dropdownVisible ? '▲' : '▼'}
                    </div>
                    {dropdownVisible && (
                    <div className="adm-dropdown-menu">
                      <p className="adm-dropdown-item">Perfil</p>
                      <hr />
                      <p className="adm-dropdown-item" onClick={handleLogoutClick}>Logout</p>
                    </div>
                    )}
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