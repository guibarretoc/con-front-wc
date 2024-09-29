import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import CadastroColaborador from './components/CadastroColaborador/cadastroColaborador';
import App from './App';
import FuncionarioHomePage from './pages/funcionarioHomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CustomerHome from './pages/CustomerHome';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import DepartmentTickets from './pages/DepartmentTickets';
import CentralDeAjudaPage from './pages/CentralDeAjudaPage'
import HomeAdmPage from './pages/HomeAdm';
import CreateTicket from './pages/CreateTicket';
import PerguntasFrequentes from './pages/PerguntasFrequentes';
import HomeAdm from './components/HomeAdm/HomeAdm';
import ClienteHome from './pages/HomeCliente'

function Main() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/teste" element={<CentralDeAjudaPage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/homeAdm" element={<HomeAdmPage />} />
        <Route
          path="/cadastroColaborador"
          element={
            <ProtectedRoute allowedTypes={['ADMIN']}>
              <CadastroColaborador />
            </ProtectedRoute>
          }
        />
        <Route path="/app" element={<App />} />
        <Route
          path="/funcionario"
          element={
            <ProtectedRoute allowedTypes={['EMPLOYEE']}>
              <FuncionarioHomePage />
            </ProtectedRoute>
          }
        />
       
        {/* TODO: turn into a private route for EMPLOYEE */}
        <Route 
          path='department-tickets' 
          element={
            <ProtectedRoute allowedTypes={['EMPLOYEE']}>
              <DepartmentTickets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customerHome"
          element={
            <ProtectedRoute allowedTypes={['CUSTOMER']}>
              <CentralDeAjudaPage/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminHome"
          element={
            <ProtectedRoute allowedTypes={['ADMIN']}>
              <HomeAdm />
            </ProtectedRoute>
          }
        />
        <Route
        path="/Create-Ticket"
        element={
          <ProtectedRoute allowedTypes={['CUSTOMER']}>
            <CreateTicket/>
          </ProtectedRoute>
        
        }
        />
        <Route
        path="/Perguntas-Frequentes"
        element={
          <ProtectedRoute allowedTypes={['CUSTOMER']}>
            <PerguntasFrequentes/>
          </ProtectedRoute>
        
        }
        />
        <Route
        path="/clienteHome"
        element={
          <ProtectedRoute allowedTypes={['CUSTOMER']}>
            <ClienteHome/>
          </ProtectedRoute>
        }
        />
      </Routes>
    </Router>
  );
}

export default Main;