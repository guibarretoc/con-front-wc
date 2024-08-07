import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import MinhasImg from '../../assets/images/MinhasImg.jpeg';
import relogio from '../../assets/images/relogio.png';
import email from '../../assets/images/email.png';

function TelaComponent() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col md:flex-row">
          <div className="flex w-full md:w-1/2 bg-gray-100 p-8 items-center justify-center">
            <div className="w-full max-w-md p-4">
              <h2 className="text-2xl font-bold mb-6 text-center">Envie sua Mensagem</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="department" className="block text-gray-700">Departamento</label>
                  <select id="department" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="financeiro">Financeiro</option>
                    <option value="administrativo">Administrativo</option>
                    <option value="operacional">Operacional</option>
                    <option value="comercial">Comercial</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700">Assunto</label>
                  <input type="text" id="subject" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">Mensagem</label>
                  <textarea id="message" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" rows="4"></textarea>
                </div>
                <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Enviar</button>
              </form>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 bg-white p-8 items-center justify-center">
            <div className="w-full max-w-md p-4">
              <h2 className="text-2xl font-bold mb-6 text-center">Contato</h2>
              <div className="mb-4 flex items-center">
                <img src={MinhasImg} alt="Telefone" className="w-6 h-6 mr-5" />
                <span>(81) 99999-9999</span>
              </div>
              <div className="mb-4 flex items-center">
                <img src={email} alt="Email logo" className="w-6 h-6 mr-5" />
                <span>graficashow@gmail.com</span>
              </div>
              <div className="mb-4 flex items-center">
                <img src={relogio} alt="Horário de Funcionamento" className="w-6 h-6 mr-5" />
                <span>Segunda à Sexta das 8 às 18h</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default TelaComponent;
