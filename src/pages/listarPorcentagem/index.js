import React, { useState, useEffect } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { Link } from 'react-router-dom';
import Head from '../../componente/Head';

export default function ListarDizimista() {
  const dizimistas = JSON.parse(localStorage.getItem("cd-usuarios") || "[]");

  const [totalValor, setTotalValor] = useState(0);
  const [porcentagem1, setPorcentagem1] = useState(0);
  const [porcentagem2, setPorcentagem2] = useState(0);
  const [porcentagem3, setPorcentagem3] = useState(0);
  const [valorPorcentagem1, setValorPorcentagem1] = useState(0);
  const [valorPorcentagem2, setValorPorcentagem2] = useState(0);
  const [valorPorcentagem3, setValorPorcentagem3] = useState(0);

  useEffect(() => {
    calcularTotalValor();
  }, []);

  const calcularTotalValor = () => {
    let total = 0;
    dizimistas.forEach(dizimista => {
      total += parseFloat(dizimista.valor);
    });
    setTotalValor(total);

    const porcentagemTotal = total / 100;
    setPorcentagem1((total * 40) / porcentagemTotal);
    setPorcentagem2((total * 40) / porcentagemTotal);
    setPorcentagem3((total * 20) / porcentagemTotal);

    setValorPorcentagem1((total * 40) / 100);
    setValorPorcentagem2((total * 40) / 100);
    setValorPorcentagem3((total * 20) / 100);
  };

  return (
    <div className="dashboard-container">
      <div className='menu'>
        <Menu />
      </div>
      <div className='principal'>
        <Head title="Distribuição de Renda" />
      
        <table>
          <thead>
            <tr>
              <th>Porcentagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pre benda: {porcentagem1.toFixed(2)}%</td>
              <td>R${valorPorcentagem1.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Congregaçao: {porcentagem2.toFixed(2)}%</td>
              <td>R${valorPorcentagem2.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Matriz: {porcentagem3.toFixed(2)}%</td>
              <td>R${valorPorcentagem3.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>Valor Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>R${totalValor.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
