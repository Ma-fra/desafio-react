import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createSession } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false); //ajuda fazendo com que a programação startar depois de verificar se existe coisa na memório
  }, []);

  const login = async (usuario, password) => {
    const response = await createSession(usuario, password);

    console.log("login", response.data);

    const loggedUser = response.data.user;

    localStorage.setItem("user", JSON.stringify(loggedUser));

      setUser(loggedUser);
      navigate("/");
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ autheticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
