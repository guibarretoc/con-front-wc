import React from 'react'
import "./card.css"

const Card = () => {
  return (
    <div>
      <div id='card-flex-container'>
        <div id='card-ticket-data'>
          <p>descrição</p>
          <p>id</p>
          <p>data + nome cliente</p>
        </div>
        {/* <div id='card-emplyee-picture'>
          pic
        </div> */}
      </div>
    </div>
  )
}

export default Card