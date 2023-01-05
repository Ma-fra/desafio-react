import React, { useState, useEffect } from 'react'
import api from '../services/api';

const SignUp = () => {
  const [nomeUsuario, setNomeUsuario] = useState();
  const [senha, setSenha] = useState();
  const [confirmacaoSenha, setConfirmacaoSenha] = useState();
  async function cadastrarUsuario(e) {
    console.log(senha);
    if (senha == confirmacaoSenha && senha !== undefined && nomeUsuario !== undefined && confirmacaoSenha !== undefined) {
      e.preventDefault();
      const params = {
        login: nomeUsuario,
        password: senha
      }
      try {
        await api.post(`users`, params);
        alert("Cadastro realizado com sucesso");
        setSenha("");
        setNomeUsuario("");
        setConfirmacaoSenha("");
      } catch (error) {
        alert('Erro ao cadastrar Usuário', error);
      }
    } else {
      alert("As senhas não são iguais ou há campos não preenchidos");
    }
  }





  return (
    <form onSubmit={cadastrarUsuario}>
      <h3>Crie sua conta</h3>
      <div className="mb-3">
        <label>Nome de usuário</label>
        <input
          type="text"
          className="form-control"
          placeholder="Insira um nome"
          value={nomeUsuario}
          onChange={e => setNomeUsuario(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Senha</label>
        <input
          type="password"
          className="form-control"
          placeholder="Insira uma senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Confirme sua senha</label>
        <input
          type="password"
          className="form-control"
          placeholder="Insira a senha novamente"
          value={confirmacaoSenha}
          onChange={e => setConfirmacaoSenha(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="button">
          Cadastre-se
        </button>
      </div>
      <p className="account text-right">
        Já possui uma conta? <a href="/sign-in">Faça login</a>
      </p>
    </form>
  )
}
export default SignUp;