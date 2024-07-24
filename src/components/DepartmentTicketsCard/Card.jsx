import React, { useEffect, useState } from 'react';
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
      <div onClick={openModal}>
        <div className='flex flex-row mt-1 mr-2  bg-[#F4F4F4] border border-[#BAB8B8] rounded-md cursor-pointer px-2 py-1'>
          <div>
            <p className='text-[#1E1E1E] text-sm'>{ticket.title}</p>
            <p className='text-[#666363] text-xs'>{ticket.id}</p>
            <p className='text-[#1E1E1E] text-sm'>Aberto dia {ticket.date} por {customerName}</p>
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
