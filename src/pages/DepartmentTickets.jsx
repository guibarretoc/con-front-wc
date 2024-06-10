import React from 'react'
import Menufuncionario from '../components/funcionario/menufuncionario'
import Navfuncionario from './../components/funcionario/navfuncionario';
import MainContent from '../components/DepartmentTicketsMainContent/MainContent';

const DepartmentTickets = () => {
  return (
    <div id='dept-tickets-main-div'>
      <Menufuncionario />
      <div id='dept-tickets-below-navbar'>
        {/* src\components\DepartmentTicketsMainContent\mainContent.css */}
        <Navfuncionario />
        <MainContent />
      </div>
    </div>
  )
}

export default DepartmentTickets