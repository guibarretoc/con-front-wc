import { useNavigate } from "react-router-dom";
import "./mainfuncionario.css";

const Mainfuncionario = () => {
  const navigate = useNavigate();

  const handleTicketsClick = () => {
    navigate("/department-tickets")
  }

  return (
    <div>
      <div className="titulo">
        <p>Bem vindo ao </p>
        <h1>WayClient</h1>
      </div>
      <div className="botoes-container">
        <div className="botoes">
          <button className="btn">
            <p>Cadastrar Cliente</p>
            <div className="fa-cadastrar"></div>
          </button>
          <button className="btn btn-t" onClick={handleTicketsClick}>
            <p>Tickets</p>
            <div className="fa-ticket"></div>
          </button>
        </div>
        <div className="botoes">
          <button className="btn btn-a">
            <p>Atualizar Dados</p>
            <div className="fa-atualizar"></div>
          </button>
          <button className="btn btn-h">
            <p>Historico</p>
            <div className="fa-historico"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mainfuncionario;
