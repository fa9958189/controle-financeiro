import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import financeiroImage from '../../assets/img/financeiro1.svg'; // Importe a imagem de capa

export default function Logon() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const logar = (e) => {
    e.preventDefault();
    // Verifique se o email e a senha correspondem às credenciais válidas
    if (email === 'seuemail@exemplo.com' && password === 'suasenha') {
      navigate('/dashboard'); // Redireciona para a página de dashboard se as credenciais estiverem corretas
    } else {
      setError('Email ou senha incorretos. Por favor, tente novamente.'); // Define o erro se as credenciais estiverem incorretas
    }
  };

  return (
    <div className="background-container">
      <img className="background-image" src={financeiroImage} alt="Financeiro" />
      <div className="logon-container">
        <section className="form">
          <h1>Faça seu login</h1>
          {error && <p className="error-message">{error}</p>} {/* Exibe a mensagem de erro, se houver */}
          <form onSubmit={logar}>
            <input
              className="input-field"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              className="input-field"
              placeholder="Senha"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit">Entrar</button>
            <a href="/cadastroUsuario1">Novo Cadastro</a>
          </form>
        </section>
      </div>
    </div>
  );
}
