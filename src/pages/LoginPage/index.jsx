import React, { useState } from "react";

import "./styles.css";

const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { user, password });
  };

  return (
    <div id="login">
      <h1 className="title">Login do sistema</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="user">Usuário</label>
          <input
            type="user"
            name="user"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button className="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
