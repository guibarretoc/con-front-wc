import React from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, ticket, customerName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2 id="modal-title">{ticket.title}</h2>
        <p id="modal-status">{ticket.status}</p>
        <p id="modal-id">ID: {ticket.id}</p>
        <p id="modal-openby" className='modal-static'>Aberto por:</p>
        <p id="modal-customer-name">{customerName} em {ticket.date}</p>
        <p id="modal-static-description" className='modal-static'>Descrição:</p>
        <p id="modal-dynamic-description">{ticket.description}</p>
      </div>
    </div>
  );
};

export default Modal;
