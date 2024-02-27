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
  };

  const handleExcluir = (id) => {
    // Implemente a lógica para exclusão aqui
    console.log("Excluir despesa com o ID:", id);
  };

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
              <th>Ações</th> {/* Coluna para os botões de ação */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Congregação: {porcentagemCongregacao.toFixed(2)}%</td>
              <td>R${valorPorcentagemCongregacao.toFixed(2)}</td>
              <td></td> {/* Coluna vazia para as ações */}
            </tr>
          </tbody>
        </table>

        <h2>Despesas Cadastradas</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th>Data</th>
              <th>Ações</th> {/* Coluna para os botões de ação */}
            </tr>
          </thead>
          <tbody>
            {despesas.map(despesa => (
              <tr key={despesa.id}>
                <td>{despesa.nome}</td>
                <td>{despesa.valor}</td>
                <td>{despesa.data}</td>
                <td>
                  <button onClick={() => handleExcluir(despesa.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
