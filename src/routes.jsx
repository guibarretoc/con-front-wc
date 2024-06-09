import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import CadastroColaborador from './components/CadastroColaborador/cadastroColaborador';
import App from './App';
import FuncionarioHomePage from './pages/funcionarioHomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CustomerHome from './pages/CustomerHome';
import AdminHome from './pages/AdminHome';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function Main() {
  //const isLogged = sessionStorage.getItem(isLogged);
  //const userType = sessionStorage.getItem(userType)

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home />
          //(isLogged == true && userType == "CUSTOMER") ? <CustomerHome /> :<Home />
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
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
        <Route
          path="/customerHome"
          element={
            <ProtectedRoute allowedTypes={['CUSTOMER']}>
              <CustomerHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminHome"
          element={
            <ProtectedRoute allowedTypes={['ADMIN']}>
              <AdminHome />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default Main;
