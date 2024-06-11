import React, { useEffect, useState } from 'react';
import "./mainContent.css";
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
    <div id="dept-ticket-main-div">
      <div id="dept-tickets-main-content">
        <section className='dept-tickets'>
          <h1>Tickets abertos</h1>
          <div className='dept-tickets-list'>
            {tickets.map((ticket) => {
              return ticket.status === "Pendente" ? <Card ticket={ticket} key={ticket.id} /> : null;
            })}
          </div>
        </section>

        <section className='dept-tickets'>
          <h1>Tickets em atendimento</h1>
          <div className='dept-tickets-list'>
            {tickets.map((ticket) => {
              return ticket.status === "Em atendimento" ? <Card ticket={ticket} key={ticket.id} /> : null;
            })}
          </div>
        </section>

        <section className='dept-tickets'>
          <h1>Tickets em impedimento</h1>
          <div className='dept-tickets-list'>
            {tickets.map((ticket) => {
              return ticket.status === "Em impedimento" ? <Card ticket={ticket} key={ticket.id} /> : null;
            })}
          </div>
        </section>

        <section className='dept-tickets'>
          <h1>Tickets fechados</h1>
          <div className='dept-tickets-list'>
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