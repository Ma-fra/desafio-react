import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import { AuthProvider, AuthContext } from "./Contexts/auth";

const AppRoutes = () => {
  //elemento que vai envolver as rotas que sarão privadas
  const Private = ({ children }) => {
    //vai puxar as informações para saber se o usuário está logado ou não e redirecioná-lo para a rota dependendo do status
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="loading">Carregando...</div>;
    }

    //caso o usuário não esteja logado ele será encaminhado para a página de login
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/"
            element={
              <Private>
                <HomePage />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
