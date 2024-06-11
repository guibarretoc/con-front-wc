import React, { useEffect, useState } from 'react';
import './card.css';
import getCustomerByTicketId from './../../services/ticket/getCustomerByTicketId';
import Modal from './../DepartmentTicketsModal/Modal';

const Card = ({ ticket }) => {
  const [customerName, setCustomerName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCustomerName = async () => {
      const customer = await getCustomerByTicketId(ticket.id);
      if (customer) {
        setCustomerName(customer.name);
      }
    };

    fetchCustomerName();
  }, [ticket.id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!ticket) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <div id='card-main-div' onClick={openModal}>
        <div id='card-flex-container'>
          <div id='card-ticket-data'>
            <p id='card-ticket-description'>{ticket.title}</p>
            <p id='card-ticket-id'>{ticket.id}</p>
            <p id='card-ticket-opened'>Aberto dia {ticket.date} por {customerName}</p>
          </div>
          {/* <div id='card-emplyee-picture'>
            pic
          </div> */}
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        ticket={ticket} 
        customerName={customerName}
      />
    </div>
  )
}

export default Card;
