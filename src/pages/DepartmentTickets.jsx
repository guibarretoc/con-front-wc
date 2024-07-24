import React from 'react'
import MainContent from '../components/DepartmentTicketsMainContent/MainContent';
import Header from '../components/DepartmentTicketsHeader/Header';
import DepartmentData from '../components/DepartmentTicketsDepartmentData/DepartmentData';

const DepartmentTickets = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col lg:flex-row'>
        {/* src\components\DepartmentTicketsMainContent\mainContent.css */}
        <DepartmentData />
        <MainContent />
      </div>
    </div>
  )
}

export default DepartmentTickets