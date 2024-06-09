import React, { useState, useEffect } from 'react';
import './menufuncionario.css';
import getEmployeeData from './../../services/employee/getEmployeeData';
import { useNavigate } from 'react-router-dom';

const Menufuncionario = () => {
  const userData = {
    name: "Filipe Granja",
    imagem: "../../assets/funcionario/perfil.png",
  };

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

  const handleLogoClick = () => {
    navigate('/funcionario');
  }

  const getEmployeeInfo = async() => {
    try {
        let name = await getEmployeeData(sessionStorage.getItem("userId"))
        if (name) {
            sessionStorage.setItem("username", name);
            setUsername(name);
        }
    } catch (error) {
        console.log(error)
    }
};

  useEffect(() => {
    getEmployeeInfo();
}, []);


  if (!username) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <nav className={"menu-content-funcionario"}>
        <div className={"menu-funcionario"}>
          <h2 id={"logo"} onClick={handleLogoClick}>WayClient</h2>
          
          <div className={"textos"}>
            <h3>Tickets</h3>
            <h3>Mensagens</h3>
            <h3>Histórico</h3>
            <input type="text" placeholder="Pesquisar"></input>
          </div>
          <div className='funcio'>
            <div className="imgPerfil"></div>
            <p className='nameFun'>{username}</p>
            <div className="dropdown-toggle" onClick={toggleDropdown}>
              {dropdownVisible ? '▲' : '▼'}
            </div>
            {dropdownVisible && (
              <div className="dropdown-menu">
                <p className="dropdown-item">Perfil</p>
                <hr />
                <p className="dropdown-item" onClick={handleLogoutClick}>Logout</p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menufuncionario;