import React from 'react'
import MainContent from '../components/DepartmentTicketsMainContent/MainContent';
import DepartmentData from '../components/DepartmentTicketsDepartmentData/DepartmentData';
import MenuFuncionario from '../components/AllNavbars/EmployeeNavbar/EmployeeNavbar';

const DepartmentTickets = () => {
  return (
    <div>
      <MenuFuncionario />
      <div className='flex flex-col lg:flex-row'>
        {/* src\components\DepartmentTicketsMainContent\mainContent.css */}
        <DepartmentData />
        <MainContent />
      </div>
    </div>
  )
}

export default DepartmentTickets