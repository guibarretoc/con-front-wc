import React, { useEffect, useState } from 'react';
import getDepartmentByEmployeeId from '../../services/department/getDepartmentByEmployeeId';
import Membrosdep from "./membrosdep";
import Situacoe from "./situacoes";
import '../funcionario/navfuncionario.css';

const Navfuncionario = () => {
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    const fetchDepartment = async () => {
      const employeeId = sessionStorage.getItem("userId");
      const data = await getDepartmentByEmployeeId(employeeId);
      setDepartment(data);
      sessionStorage.setItem("department_id", data.id)
    };

    fetchDepartment();
  }, []);

  if (!department) {
    return <div>Loading...</div>;
  }

  return (
    <div className="nav-fun">
      <nav className="nav-funcionario">
        <div>
          <h3 className="dpfinanceiro">
            Departamento {department.name}
          </h3>
          <hr />
          <Situacoe />
          <hr />
          <h3 className="mb-departamento">Membros do Departamento</h3>
          {department.employees.map(employee => (
            <Membrosdep key={employee.id} employee={employee} />
          ))}
          <hr />
        </div>
      </nav>
    </div>
  );
}

export default Navfuncionario;
