import React, { useState } from 'react';
import "./mainSection.css";
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

  const handleCadastrarClick = async() => {
    if (isEquals(senha, confirmeSenha)) {
      let data = getFormData();
            
      let response = await signUpCustomer(data);
      sessionStorage.setItem("debug-response", response)

      if (response === '200') {
        setIsModalOpen(true);
      } else {
        alert("Falha ao cadastrar colaborador");
      }

    } else {
      alert("As senhas devem ser idênticas")
    }
  };

  const getFormData = () => {
    return {
      name: nomeCompleto,
      phone: telefone,
      email: email,
      role: "CUSTOMER",
      password: senha
    }
  }

  const handleGoToLogin = () => {
    navigate('/login');
  };


  return (
    <div id='su-main-div'>
      <section id="su-col-one">
        <div>
          <h1 id="su-col-one-main-title">
            WayClient
          </h1>
        </div>
        <div>
          <h2 id="su-col-one-sec-title">
            Com a gente o seu caminho fica mais seguro.
          </h2>
        </div>
      </section>
      <section id="su-col-two">
        <div id="su-col-two-main-title">
          <h1>
            Cadastre-se
          </h1>
        </div>
        <div className='su-input'>
          <label className='ls-text'>
            Nome completo
          </label>
          <input 
            className='su-form-field'
            type='text'
            value={nomeCompleto}
            onChange={handleNomeCompletoChange}
          />
        </div>
        <div className='su-input'>
          <label className='ls-text'>
            Telefone
          </label>
          <input 
            className='su-form-field'
            type='tel'
            value={telefone}
            onChange={handleTelefoneChange}
          />
        </div>
        <div className='su-input'>
          <label className='ls-text'>
            Email
          </label>
          <input 
            className='su-form-field' 
            type='email'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='su-input'>
          <label className='ls-text'>
            Senha
          </label>
          <input 
            className='su-form-field' 
            type='password'
            value={senha}
            onChange={handleSenhaChange}
          />
        </div>
        <div className='su-input'>
          <label className='ls-text'>
            Confirme sua senha
          </label>
          <input 
            className='su-form-field' 
            type='password'
            value={confirmeSenha}
            onChange={handleConfirmeSenhaChange}
          />
        </div>
        <div id='ls-access-btn'>
          <button onClick={handleCadastrarClick}>
            Cadastrar
          </button>
        </div>
      </section>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Cadastro realizado com sucesso!</h2>
              <p>Agora você pode fazer o login.</p>
              <button onClick={handleGoToLogin}>Ir para Login</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainSection;