import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from "../../assets/Login/perfil.png";
import login from '../../services/auth/login';

const MainSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLoginClick = async () => {
    let data = {
      "email": email,
      "password": senha
    }
    
    try {
      let response = await login(data);
      if (response && response.token && response.userType && response.userId) {
        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("userType", response.userType);
        sessionStorage.setItem("userId", response.userId);
        sessionStorage.setItem("isLogged", true);
    
        console.log("Login bem-sucedido!");
        redirectAfterLogin(response.userType);
      } else {
        console.error("A resposta da API não contém os campos esperados.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  const handleSignupClick = () => {
    navigate("/signup");
  }

  const redirectAfterLogin = (userType) => {
    if (userType === "ADMIN") {
      navigate("/adminHome");
    } else if (userType === "EMPLOYEE") {
      navigate("/funcionario");
    } else {
      navigate("/clienteHome");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-12 pb-12">
      <section className="bg-white rounded-lg shadow-lg p-10 w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-8">Bem vindo de volta!</h1>
        <div className="w-full flex justify-center mb-8">
          <img src={profilePic} alt="Profile" className="w-1/5 border border-green-600 rounded-full" />
        </div>
        <div className="w-full max-w-md mb-6">
          <label className="block text-gray-700 text-xl mb-2">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange}
            className="w-full px-4 py-4 text-xl text-gray-600 border border-green-600 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>
        <div className="w-full max-w-md mb-6">
          <label className="block text-gray-700 text-xl mb-2">Senha</label>
          <input 
            type="password" 
            value={senha} 
            onChange={handleSenhaChange}
            className="w-full px-4 py-4 text-xl text-gray-600 border border-green-600 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>
        <div className="w-full max-w-md flex items-center mb-6">
          <input id="ls-keep-conected" type="checkbox" className="mr-3 cursor-pointer w-5 h-5" />
          <p className="text-gray-700 text-xl">Mantenha-me conectado</p>
        </div>
        <div className="w-full max-w-md mb-6 flex justify-center">
          <button 
            onClick={handleLoginClick} 
            className="bg-green-600 text-white py-4 px-8 rounded-full w-full text-xl hover:bg-green-700 transition-all"
          >
            Acessar
          </button>
        </div>
        <p className="text-gray-700 text-xl">Não possui uma conta?
          <a onClick={handleSignupClick} className="text-green-600 cursor-pointer ml-2 hover:underline">Cadastre-se</a>
        </p>
      </section>
    </div>
  );
}

export default MainSection;
