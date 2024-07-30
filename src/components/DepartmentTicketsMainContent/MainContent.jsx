import React, { useEffect, useState } from 'react';
import getDepartmentTickets from '../../services/department/getDepartmentTickets';
import Card from "../DepartmentTicketsCard/Card";

const MainContent = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchDepartmentTickets = async () => {
      const data = await getDepartmentTickets();
      setTickets(data);
      console.log(data);
    }

    fetchDepartmentTickets();
  }, []);

  return (
    <div className="overflow-x-auto px-1 py-2 h-screen">
      <div className='flex gap-2 w-screen items-start'>
        <section className='border border-[#BAB8B8] rounded-lg bg-[#F9F6EE] flex-shrink-0 w-full sm:w-2/4 lg:w-1/4 py-2 pl-3'>
          <h2 className='pl-2 text-sm lg:text-base'>Tickets abertos</h2>
          <div className='flex flex-col gap-1 w-full pb-1'>
            {tickets.map((ticket) => {
              return ticket.status === "Pendente" ? <Card ticket={ticket} key={ticket.id} /> : null;
            })}
          </div>
        </section>

        <section className='border border-[#BAB8B8] rounded-lg bg-[#F9F6EE] flex-shrink-0 w-full sm:w-2/4 lg:w-1/4 py-2 pl-3'>
          <h2 className='pl-2 text-sm lg:text-base'>Tickets em atendimento</h2>
          <div className='flex flex-col gap-1 w-full pb-1'>
            {tickets.map((ticket) => {
              return ticket.status === "Em atendimento" ? <Card ticket={ticket} key={ticket.id} /> : null;
            })}
          </div>
        </section>

        <section className='border border-[#BAB8B8] rounded-lg bg-[#F9F6EE] flex-shrink-0 w-full sm:w-2/4 lg:w-1/4 py-2 pl-3'>
          <h2 className='pl-2 text-sm lg:text-base'>Tickets em impedimento</h2>
          <div className='flex flex-col gap-1 w-full pb-1'>
            {tickets.map((ticket) => {
              return ticket.status === "Em impedimento" ? <Card ticket={ticket} key={ticket.id} /> : null;
            })}
          </div>
        </section>

        <section className='border border-[#BAB8B8] rounded-lg bg-[#F9F6EE] flex-shrink-0 w-full sm:w-2/4 lg:w-1/4 py-2 pl-3'>
          <h2 className='pl-2 text-sm lg:text-base'>Tickets fechados</h2>
          <div className='flex flex-col gap-1 w-full pb-1'>
            {tickets.map((ticket) => {
              return ticket.status === "Fechado" ? <Card ticket={ticket} key={ticket.id} /> : null;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainContent;