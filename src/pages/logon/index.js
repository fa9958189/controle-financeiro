import './styles.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Logon() {
  const navigate = useNavigate();
  
  const logar = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  }

  return (
    <div className="logon-container">
      <section className="form">
        <h1>Faça seu login</h1>
        <form onSubmit={logar}>
          <input placeholder="Email" />
          <input placeholder="Senha" type='password' />
          <button type="submit">Entrar</button>
          <a href="/cadastroUsuario1">Novo Cadastro</a>
        </form>
      </section>
    </div>
  )
}
