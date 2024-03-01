import React, { useState, useEffect } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { Link } from 'react-router-dom';
import Head from '../../componente/Head';

export default function ListarDespesas() {
  const dizimistas = JSON.parse(localStorage.getItem("cd-usuarios") || "[]");

  const [totalValor, setTotalValor] = useState(0);
  const [porcentagemCongregacao, setPorcentagemCongregacao] = useState(0);
  const [valorPorcentagemCongregacao, setValorPorcentagemCongregacao] = useState(0);
  const [despesas, setDespesas] = useState([]);
  const [valorDespesas, setValorDespesas] = useState(0);

  useEffect(() => {
    calcularTotalValor();
    carregarDespesas();
  }, []);

  const calcularTotalValor = () => {
    let total = 0;
    dizimistas.forEach(dizimista => {
      total += parseFloat(dizimista.valor);
    });
    setTotalValor(total);

    const porcentagemTotal = total / 100;
    setPorcentagemCongregacao((total * 40) / porcentagemTotal);

    setValorPorcentagemCongregacao((total * 40) / 100);
  };

  const carregarDespesas = () => {
    const despesasFromLocalStorage = JSON.parse(localStorage.getItem("despesas") || "[]");
    setDespesas(despesasFromLocalStorage);
    const valorDespesas = despesasFromLocalStorage.reduce((acc, despesa) => acc + parseFloat(despesa.valor), 0);
    setValorDespesas(valorDespesas);
  };

  const handleExcluir = (id) => {
    const novasDespesas = despesas.filter(despesa => despesa.id !== id);
    setDespesas(novasDespesas);
    localStorage.setItem("despesas", JSON.stringify(novasDespesas));
  };

  const valorRestanteCongregacao = valorPorcentagemCongregacao - valorDespesas;

  return (
    <div className="dashboard-container">
      <div className='menu'>
        <Menu />
      </div>
      <div className='principal'>
        <Head title="Despesas" />
        <Link to="/cadastrodespesas" className='btn-novo'>Despesas</Link>
      
        <table>
          <thead>
            <tr>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Congregação: {porcentagemCongregacao.toFixed(2)}%</td>
              <td>R${valorPorcentagemCongregacao.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
            </tr>
          </tbody>
        </table>

        <h2>Despesas Cadastradas</h2>
        <div style={{ overflowY: 'auto', maxHeight: '300px' }}>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {despesas.slice(0, 5).map(despesa => (
                <tr key={despesa.id}>
                  <td>{despesa.nome}</td>
                  <td>R${despesa.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                  <td>{despesa.data}</td>
                  <td>
                    <button onClick={() => handleExcluir(despesa.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '20px', textAlign: 'center', color: 'white' }}>
            <p>Valor das despesas: R${valorDespesas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            <p>Valor restante para a congregação: R${valorRestanteCongregacao.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
          </div>
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center', color: valorRestanteCongregacao < 0 ? 'red' : 'white' }}>
          {valorRestanteCongregacao < 0 ? 'A congregação já gastou toda sua renda' : ''}
        </div>
      </div>
    </div>
  );
}
