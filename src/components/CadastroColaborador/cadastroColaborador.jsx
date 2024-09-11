import React, { useState } from "react";
import NavbarAdm from "../NavbarAdm/navbarAdm";
import { isEquals } from './../../utils/isEquals';
import signUpEmployee from './../../services/auth/signUpEmployee';

const cadastroColaborador = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaRepetida, setSenhaRepetida] = useState('');
    const [departamento, setDepartament] = useState('');

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    const handleSenhaRepetidaChange = (event) => {
        setSenhaRepetida(event.target.value);
    };

    const handleDepartamentoChange = (event) => {
        setDepartament(event.target.value);
    }

    const handleCadastroColaboradorClick = async () => {
        if (isEquals(senha, senhaRepetida)) {
            let data = getFormData();

            let response = await signUpEmployee(data);

            if (response == 200) {
                resetFormFields();
                alert("Colaborador cadastro com sucesso");
            } else {
                alert("Falha ao cadastrar colaborador");
            }
        }
    }

    const getFormData = () => {
        return {
            email: email,
            name: nome,
            password: senha,
            role: "EMPLOYEE",
            departmentName: departamento
        }
    }

    const resetFormFields = () => {
        setEmail('')
        setNome('')
        setSenha('')
        setSenhaRepetida('')
        setDepartament('')
    }

    const [tipoCadastro, setTipoCadastro] = useState('Cadastro de Colaborador');

    const handleTipoCadastroChange = (event) => {
        setTipoCadastro(event.target.value);
    };

    const renderColaboradorForm = () => {
        return (
            <div>
                <section className="rounded-lg border border-gray-500 bg-white flex flex-col items-left mt-[5%] p-[4%]">
                    <h1 className="text-gray-600 text-4xl">Cadastro de Colaborador</h1>

                    <div className="flex">
                        <div className="flex flex-col w-[45%] mt-5 mb-2">
                            <label className="text-gray-600 text-xl">Nome Completo</label>
                            <input type="text" id="input-nome" className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                            <label className="text-gray-600 text-xl">E-mail</label>
                            <input type="text" id="input-email" className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                            <label className="text-gray-600 text-xl">Senha de Acesso</label>
                            <input type="password" id="input-senha" className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                            <label className="text-gray-600 text-xl">Confirme a senha</label>
                            <input type="password" id="input-senha-repetida" className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                        </div>

                        <div className="flex flex-col w-[45%] mt-5 mb-2 ml-7">
                            <label className="text-gray-600 text-xl">Departamento</label>
                            <input type="text" id="input-departamento" list="departamento" className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                            <datalist id="departamento">
                                <option value="Financeiro"></option>
                                <option value="Design"></option>
                            </datalist>
                        </div>
                    </div>

                </section>

                <button className="rounded-full w-[18%] border-none bg-green-700 shadow-lg cursor-pointer text-white text-lg mt-4 ml-[82%] pb-3 pt-3 pl-2 pr-2 hover:shadow-xl active:shadow-md"
                >Cadastrar colaborador</button>
            </div>
        );
    };

    const renderClienteForm = () => {
        return (
            <div>
                <section className="rounded-lg border border-gray-500 bg-white flex flex-col items-left mt-[5%] p-[4%]">
                    <h1 className="text-gray-600 text-4xl">Cadastro de Cliente</h1>

                    <div className="flex">
                        <div className="flex flex-col w-[45%] mt-5 mb-2">
                            <label className="text-gray-600 text-xl">Nome Completo</label>
                            <input type="text" id="input-nome" className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                            <label className="text-gray-600 text-xl">E-mail</label>
                            <input type="text" id="input-email" className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                            <label className="text-gray-600 text-xl">Telefone</label>
                            <input type="text" id="telefone" className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                        </div>

                        <div className="flex flex-col w-[45%] mt-5 mb-2 ml-7">
                            <label className="text-gray-600 text-xl">Senha de Acesso</label>
                            <input type="password" id="input-senha" className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                            <label className="text-gray-600 text-xl">Confirme a senha</label>
                            <input type="password" id="input-senha-repetida" className="pl-2 text-gray-600 h-[6vh] text-lg rounded-full border border-green-700 mb-4 outline-none" />
                        </div>
                    </div>
                </section>
                
                    <button className="rounded-full w-[18%] border-none bg-green-700 shadow-lg cursor-pointer text-white text-lg mt-4 ml-[82%] p-3 hover:shadow-xl active:shadow-md"
                    >Cadastrar cliente</button>
            </div>
        );
    };

    return (
        <div>
            <NavbarAdm />

            <section className="rounded-lg border border-gray-500 bg-white flex flex-col items-left mx-[10%] mt-[5%] p-[3%]">
                <input
                    type="text"
                    id="input-tipo-cadastro"
                    list="tipo-cadastro"
                    value={tipoCadastro}
                    onChange={handleTipoCadastroChange}
                    className="pl-2 text-gray-600 h-[6vh] text-4xl rounded-full border border-none mb-4 outline-none"
                />
                <datalist id="tipo-cadastro">
                    <option value="Cadastro de Colaborador" className="text-4xl"></option>
                    <option value="Cadastro de Cliente" className="text-4xl"></option>
                </datalist>
            </section>

            <section className="mx-[10%] mt-[2%]">
                {tipoCadastro === 'Cadastro de Colaborador' ? renderColaboradorForm() : renderClienteForm()}
            </section>

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
        </div>
    )
}

export default cadastroColaborador
