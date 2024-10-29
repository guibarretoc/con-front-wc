import React, { useState, useEffect } from "react";
import profilepic from "../../assets/funcionario/perfil.png";
import getEmployeeData from '../../services/employee/getEmployeeData';
import getDepartmentByEmployeeId from '../../services/department/getDepartmentByEmployeeId';
import Loading from "../Loading/Loading";

const PerfilFuncionario = () => {
  const [employeeData, setEmployeeData] = useState({ name: '', id: '', department: '' });
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeInfo = async () => {
      try {
        const userId = sessionStorage.getItem("userId");
        const employeeInfo = await getEmployeeData(userId);
        const deptData = await getDepartmentByEmployeeId(userId);

        setEmployeeData({ 
          name: employeeInfo.name, 
          id: userId, 
          department: deptData.name 
        });

        // Exemplo de atividades para exibir
        setActivities([
          { id: "027", cliente: "Marcelly Freitas", data: "18 de Abril de 2024", descricao: "Valor Pago" },
          { id: "152", cliente: "João Paulo", data: "15 de Abril de 2024", descricao: "Desconto" },
        ]);
      } catch (error) {
        console.log("Erro ao buscar dados do funcionário ou departamento:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployeeInfo();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col items-center bg-[#F7F8FA] p-8 w-full">
      <section className="bg-white shadow rounded-lg p-6 w-full max-w-md mb-8">
        <div className="flex flex-col items-center">
          <img src={profilepic} alt="Perfil" className="rounded-full w-24 h-24 mb-4" />
          <h2 className="text-xl font-semibold">{employeeData.name}</h2>
          <p className="text-sm text-gray-500">ID: {employeeData.id}</p>
          <p className="text-sm text-gray-500">Departamento: {employeeData.department}</p>
        </div>
      </section>

      <section className="bg-white shadow rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-lg font-semibold mb-2">Minhas Atividades</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-50 text-gray-900">
              <tr>
                <th className="px-6 py-3 text-green-600">Id Ticket</th>
                <th className="px-6 py-3 text-green-600">Cliente</th>
                <th className="px-6 py-3 text-green-600">Data</th>
                <th className="px-6 py-3 text-green-600">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity.id} className="hover:bg-gray-50 border-b">
                  <td className="px-6 py-4 text-green-700">{activity.id}</td>
                  <td className="px-6 py-4">{activity.cliente}</td>
                  <td className="px-6 py-4">{activity.data}</td>
                  <td className="px-6 py-4">{activity.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PerfilFuncionario;
