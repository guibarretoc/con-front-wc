import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEquals } from './../../utils/isEquals';
import signUpCustomer from '../../services/auth/signUpCustomer';

const MainSection = () => {
  const navigate = useNavigate();
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmeSenha, setConfirmeSenha] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNomeCompletoChange = (event) => {
    setNomeCompleto(event.target.value);
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleConfirmeSenhaChange = (event) => {
    setConfirmeSenha(event.target.value);
  };

  const handleCadastrarClick = async () => {
    if (isEquals(senha, confirmeSenha)) {
      let data = getFormData();
      let response = await signUpCustomer(data);
      sessionStorage.setItem("debug-response", response);

      if (response === '200') {
        setIsModalOpen(true);
      } else {
        alert("Falha ao cadastrar colaborador");
      }

    } else {
      alert("As senhas devem ser idênticas");
    }
  };

  const getFormData = () => {
    return {
      name: nomeCompleto,
      phone: telefone,
      email: email,
      role: "CUSTOMER",
      password: senha
    };
  };

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-wrap justify-center items-center m-4 mt-20 md:mt-15"> 
      <section id="su-col-one" className="flex flex-col justify-center items-center gap-y-8 w-full md:w-1/2 mb-8">         
      <div>
          <h1 className="text-5xl text-green-500 font-bold" id="su-col-one-main-title">
            WayClient
          </h1>
        </div>
        <div>
          <h2 className="text-4xl text-green-500 text-center" id="su-col-one-sec-title">
            Com a gente o seu caminho fica mais seguro.
          </h2>
        </div>
      </section>
      <section id="su-col-two" className="flex flex-col items-center justify-center w-full md:w-1/2 bg-white rounded-lg shadow-[0_10px_60px_-20px_rgba(0,0,0,0.3)] p-5">
        <div className="text-5xl text-center mb-8 mt-9" id="su-col-two-main-title">
          Cadastre-se
        </div>
        <div className="su-input w-full max-w-md mb-4">
          <label className="ls-text text-lg">
            Nome completo
          </label>
          <input
            className="su-form-field w-full py-2 px-3 text-xl border border-[#379E53] rounded-lg"
            type="text"
            value={nomeCompleto}
            onChange={handleNomeCompletoChange}
          />
        </div>
        <div className="su-input w-full max-w-md mb-4">
          <label className="ls-text text-lg">
            Telefone
          </label>
          <input
            className="su-form-field w-full py-2 px-3 text-xl border border-[#379E53] rounded-lg"
            type="tel"
            value={telefone}
            onChange={handleTelefoneChange}
          />
        </div>
        <div className="su-input w-full max-w-md mb-4">
          <label className="ls-text text-lg">
            Email
          </label>
          <input
            className="su-form-field w-full py-2 px-3 text-xl border border-[#379E53] rounded-lg"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="su-input w-full max-w-md mb-4">
          <label className="ls-text text-lg">
            Senha
          </label>
          <input
            className="su-form-field w-full py-2 px-3 text-xl border border-[#379E53] rounded-lg"
            type="password"
            value={senha}
            onChange={handleSenhaChange}
          />
        </div>
        <div className="su-input w-full max-w-md mb-4">
          <label className="ls-text text-lg">
            Confirme sua senha
          </label>
          <input
            className="su-form-field w-full py-2 px-3 text-xl border border-[#379E53] rounded-lg"
            type="password"
            value={confirmeSenha}
            onChange={handleConfirmeSenhaChange}
          />
        </div>
        <div className="mt-5 flex items-center">
          <input type="checkbox" className="border rounded-lg mr-2 border-[#379E53]" />
          <span>
            Eu aceito os <a href="#" className="text-custom-color font-semibold text-[#379E53]">Termos de uso</a> & <a href="#" className="text-custom-color font-semibold text-[#379E53]">Privacy Policy</a>
          </span>
        </div>
        <div className="mt-8">
          <button
            className="bg-green-500 py-4 px-16 text-center text-white rounded-lg hover:bg-green-600 transition duration-300 block mx-auto text-xl"
            onClick={handleCadastrarClick}
          >
            Cadastrar
          </button>
        </div>
      </section>
      {isModalOpen && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Cadastro realizado com sucesso!</h2>
            <p className="mb-4">Agora você pode fazer o login.</p>
            <button
              className="bg-[#379E53] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              onClick={handleGoToLogin}
            >
              Ir para Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSection;
