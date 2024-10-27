import React, { useState, useEffect } from 'react'; 
import CustomerNavbar from '../AllNavBars/CustomerNavbar/CustomerNavbar';
import Footer from './Footer';
import getAllTickets from './../../services/ticket/getAllTickets';
import getDepartments from '../../services/department/getDepartments';
import Loading from './../Loading/Loading';
import perfilImg from './../../assets/login/perfil.png'; // Importando a imagem

const ProfilePage = () => {
  const [tickets, setTickets] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = {
    name: 'Maria Silva',
    email: 'maria.silva@example.com',
    phone: '(11) 91234-5678',
    imageUrl: perfilImg, // Usando a imagem importada
  };

  useEffect(() => {
    const fetchTicketsAndDepartments = async () => {
      const ticketData = await getAllTickets();
      setTickets(ticketData);
      const departmentData = await getDepartments();
      setDepartments(departmentData);
      setLoading(false);
    };

    fetchTicketsAndDepartments();
  }, []);

  const filteredTickets = tickets.filter(ticket => {
    return true; // Filtragem atual pode ser implementada se necessário
  });

  // Limita a exibição para os primeiros 10 tickets
  const displayedTickets = filteredTickets.slice(0, 10);

  // Função para obter a classe de cor do status
  const getStatusClass = (status) => {
    switch (status) {
      case 'Pendente':
        return 'text-yellow-500'; 
      case 'Fechado':
        return 'text-[#379E53]'; 
      case 'Em impedimento': 
        return 'text-red-500'; 
      default:
        return 'text-gray-500'; 
    }
  };

  return (
    <div className="p-4">
      <CustomerNavbar />

      <div className="border border-gray-300 rounded-lg p-4 mb-4 max-w-7xl mx-auto mt-6">
        <h1 className="text-2xl font-bold mb-4">Perfil</h1>
        <div className="flex items-center">
          <img src={user.imageUrl} alt="Perfil" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg p-4 max-w-7xl mx-auto">
        <h3 className="text-lg font-semibold mb-2">MEUS TICKETS</h3>

        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-col items-center relative overflow-x-auto">
            <table className="w-full text-xs text-left text-gray-500 border border-gray-300">
              <thead className="text-gray-900 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">Data de abertura</th>
                  <th className="px-6 py-3">Título</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Departamento</th>
                </tr>
              </thead>
              <tbody>
                {displayedTickets.map(ticket => (
                  <tr className="hover:bg-gray-50" key={ticket.id}>
                    <td className="px-6 py-4 text-[#379E53]">{ticket.id}</td>
                    <td className="px-6 py-4 text-[#379E53]">{ticket.date}</td>
                    <td className="px-6 py-4 text-[#379E53]">{ticket.title}</td>
                    <td className={`px-6 py-4 ${getStatusClass(ticket.status)}`}>{ticket.status}</td>
                    <td className="px-6 py-4">{ticket.departmentName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
