import React, { useState, useEffect } from 'react'
import getAllTickets from './../../services/ticket/getAllTickets';
import getCustomerByTicketId from './../../services/ticket/getCustomerByTicketId';

const MainContent = () => {
  const [tickets, setTickets] = useState([]);
  const [customers, setCustomers] = useState({});

  useEffect(() => {
    const fetchAllTickets = async () => {
      const data = await getAllTickets();
      setTickets(data);

      fetchCustomersForTickets(data);
    };

    fetchAllTickets()
  }, []);

  const fetchCustomersForTickets = async (tickets) => {
    const customersData = {};
    for (const ticket of tickets) {
      const customer = await getCustomerByTicketId(ticket.id);
      if (customer) {
        customersData[ticket.id] = customer.name;
      }
    }
    setCustomers(customersData);
  }

  return (
    <div className='flex flex-col pt-16 gap-8'>

      <h1 className="flex px-28 text-2xl font-bold text-[#5B5B5B]">
        Tickets
      </h1>

      <div className="px-28">
        <div className="flex px-4 gap-8 text-sm text-[#5B5B5B]">
          <div>
            Todos
          </div>
          <div>
            Sem departamento
          </div>
          {/* demais opções a partir da query aos depts */}
        </div>
        <hr className="bg-gray-400 border-gray-400"/>
      </div>

      <div className="px-28">
        <input className="border border-gray-300"/>
      </div>

      <div className="flex flex-col items-center relative overflow-x-auto">
        <table className="w-10/12 text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-300">
          <thead className="text-gray-900 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3"> id </th>
              <th scope="col" className="px-6 py-3"> Data de abertura </th>
              <th scope="col" className="px-6 py-3"> Título </th>
              <th scope="col" className="px-6 py-3"> Cliente </th>
              <th scope="col" className="px-6 py-3"> Serviço </th>
              <th scope="col" className="px-6 py-3"> Produto </th>
              <th scope="col" className="px-6 py-3"> Status </th>
              <th scope="col" className="px-6 py-3"> Departamento </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => {
                return(
                  <tr key={ticket.id} className="hover:bg-gray-50 dark:hover:bg-gray-50 text-gray-600">
                    <th scope="row" className="px-6 py-4 whitespace-nowrap max-w-32 text-ellipsis overflow-hidden">
                      {ticket.id}
                    </th>
                    <td className="px-6 py-4">
                      {ticket.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap max-w-32 text-ellipsis overflow-hidden">
                      {ticket.title}
                    </td>
                    <td className="px-6 py-4">
                      {customers[ticket.id] || "Carregando..."}
                    </td>
                    <td className="px-6 py-4">
                      {ticket.service == null ? "Nenhum" : ticket.service.name}
                    </td>
                    <td className="px-6 py-4">
                      {ticket.product == null ? "Nenhum" : ticket.product.name}
                    </td>
                    <td className="px-6 py-4">
                      {ticket.status}
                    </td>
                    <td className="px-6 py-4">
                      nome dept
                    </td>
                  </tr>
                )
            })}
          </tbody>
        </table>
      </div>
      <div className="pb-16"></div>
    </div>
  )
}

export default MainContent