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
    };
    
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
      navigate("/customerHome");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-8 pb-8">
      <section className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Bem vindo de volta!</h1>
        <div className="w-full flex justify-center mb-6">
          <img src={profilePic} alt="Profile" className="w-1/6 border border-green-600 rounded-full" />
        </div>
        <div className="w-full max-w-sm mb-4">
          <label className="block text-gray-700 text-lg mb-2">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange}
            className="w-full px-3 py-3 text-lg text-gray-600 border border-green-600 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>
        <div className="w-full max-w-sm mb-4">
          <label className="block text-gray-700 text-lg mb-2">Senha</label>
          <input 
            type="password" 
            value={senha} 
            onChange={handleSenhaChange}
            className="w-full px-3 py-3 text-lg text-gray-600 border border-green-600 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>
        <div className="flex items-center justify-between mb-6">
  <p className="text-gray-700 text-sm">Esqueceu a senha?</p>
  <a href="/forgot-password" className="text-green-600 text-sm hover:underline">Recuperar senha</a>
</div>

        <div className="w-full max-w-sm mb-4 flex justify-center">
          
          <button 
            onClick={handleLoginClick} 
            className="bg-green-600 text-white py-3 px-6 rounded-full w-full text-lg hover:bg-green-700 transition-all"
          >
            Acessar
          </button>
        </div>
        <p className="text-gray-700 text-lg">Não possui uma conta?
          <a onClick={handleSignupClick} className="text-green-600 cursor-pointer ml-2 hover:underline">Cadastre-se</a>
        </p>
      </section>
    </div>
  );
}

export default MainSection;
