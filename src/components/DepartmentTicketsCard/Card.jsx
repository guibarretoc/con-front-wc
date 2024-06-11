import React from 'react'
import "./card.css"

const Card = ({ ticket }) => {
  if (!ticket) {
    return <div>Loading...</div>; 
  }

  return (
    <div id='card-main-div'>
      <div id='card-flex-container'>
        <div id='card-ticket-data'>
          <p id='card-ticket-description'>{ticket.description}</p>
          <p id='card-ticket-id'>{ticket.id}</p>
          <p id='card-ticket-opened'>Aberto dia {ticket.date} por ~nome~</p>
        </div>
        {/* <div id='card-emplyee-picture'>
          pic
        </div> */}
      </div>
    </div>
  )
}

export default Card