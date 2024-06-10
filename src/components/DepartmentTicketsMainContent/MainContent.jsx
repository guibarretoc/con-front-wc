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
      console.log(tickets);
    }

    fetchDepartmentTickets();
  }, []);

  return (
    <div id="dept-tickets-scroll-container">
      <div id="dept-tickets-main-content">
        <section className='dept-tickets-list'>
          <h1>Tickets abertos</h1>
          {tickets.map((ticket) => {
            return ticket.status === "Pendente" ? <Card key={ticket.id} /> : null;
          })}
        </section>

        <section className='dept-tickets-list'>
          <h1>Tickets em atendimento</h1>
          {tickets.map((ticket) => {
            return ticket.status === "Em atendimento" ? <Card key={ticket.id} /> : null;
          })}
        </section>

        <section className='dept-tickets-list'>
          <h1>Tickets em impedimento</h1>
          {tickets.map((ticket) => {
            return ticket.status === "Em impedimento" ? <Card key={ticket.id} /> : null;
          })}
        </section>

        <section className='dept-tickets-list'>
          <h1>Tickets fechados</h1>
          {tickets.map((ticket) => {
            return ticket.status === "Fechado" ? <Card key={ticket.id} /> : null;
          })}
        </section>
      </div>
    </div>
  );
}

export default MainContent;
