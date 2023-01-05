import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [contas, setContas] = useState([]);
  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const contasResponse = await api.get(`users`);

      const contasApi = contasResponse.data;
      setContas(contasApi);
    }

    fetchData();
  }, []);

  const logar = () => {
    var loginExiste = false;
    for (var i = 0; i < contas.length; i++) {
      if (contas[i].password == senha && contas[i].login == usuario) {
        loginExiste = true;
        break;
      } else {
        continue;
      }
    }
    if (loginExiste === false) {
      alert(
        'Esta conta não existe! Por favor crie uma conta clicando no botão "Cadastre-se"'
      );
    } else {
      navigate("/home");
    }
  };

  return (
    <form onSubmit={logar}>
      <h3>Entre na sua conta</h3>
      <div className="mb-3">
        <label>Nome de usuário</label>
        <input
          type="user"
          className="form-control"
          placeholder="Insira seu nome de usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Senha</label>
        <input
          type="password"
          className="form-control"
          placeholder="Insira sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Lembre de mim
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="button">
          Entre
        </button>
      </div>
      <p className="account text-right">
        Não tem uma conta? <a href="/sign-up">Cadastre-se</a>
      </p>
    </form>
  );
};
export default Login;
