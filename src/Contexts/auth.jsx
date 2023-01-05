import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  const login = (usuario, password) => {
    console.log("login auth", { usuario, password });

    const loggedUser = {
      id: "123",
      usuario,
    };

    localStorage.setItem("user", JSON.stringify(loggedUser));

    if (password === "secret") {
      setUser(loggedUser);
      navigate("/");
    }
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
