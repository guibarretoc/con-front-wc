import React, { useEffect, useState } from 'react';
import getDepartmentTickets from '../../services/department/getDepartmentTickets';
import Card from "../DepartmentTicketsCard/Card";
import { DndContext } from '@dnd-kit/core';
import Droppable from "../Droppable/Droppable"

const MainContent = (props) => {
  const [tickets, setTickets] = useState([]);

  const handleDragEnd = (event) => {
    const { over, active } = event;

    if (over && active.id !== over.id) {
      setTickets((prevTickets) => {
        return prevTickets.map((ticket) => {
          if (ticket.id === active.id) {
            return {
              ...ticket,
              status: over.id,
            };
          }
          return ticket;
        });
      });
    }
  };

  useEffect(() => {
    const fetchDepartmentTickets = async () => {
      const data = await getDepartmentTickets();
      setTickets(data);
      console.log(data);
    };

    fetchDepartmentTickets();
  }, []);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="overflow-x-auto px-1 py-2 h-screen">
        <div className='flex gap-2 w-screen items-start'>

          <Droppable id="Pendente">
            <h2 className='pl-2 text-sm lg:text-base'>Tickets abertos</h2>
            <div className='flex flex-col gap-1 w-full pb-1'>
              {tickets.filter(ticket => ticket.status === "Pendente").map((ticket) => (
                <Card ticket={ticket} key={ticket.id} />
              ))}
            </div>
          </Droppable>

          <Droppable id="Em atendimento">
            <h2 className='pl-2 text-sm lg:text-base'>Tickets em atendimento</h2>
            <div className='flex flex-col gap-1 w-full pb-1'>
              {tickets.filter(ticket => ticket.status === "Em atendimento").map((ticket) => (
                <Card ticket={ticket} key={ticket.id} />
              ))}
            </div>
          </Droppable>

          <Droppable id="Em impedimento">
            <h2 className='pl-2 text-sm lg:text-base'>Tickets em impedimento</h2>
            <div className='flex flex-col gap-1 w-full pb-1'>
              {tickets.filter(ticket => ticket.status === "Em impedimento").map((ticket) => (
                <Card ticket={ticket} key={ticket.id} />
              ))}
            </div>
          </Droppable>

          <Droppable id="Fechado">
            <h2 className='pl-2 text-sm lg:text-base'>Tickets fechados</h2>
            <div className='flex flex-col gap-1 w-full pb-1'>
              {tickets.filter(ticket => ticket.status === "Fechado").map((ticket) => (
                <Card ticket={ticket} key={ticket.id} />
              ))}
            </div>
          </Droppable>

        </div>
      </div>
    </DndContext>
  );
}

export default MainContent;
