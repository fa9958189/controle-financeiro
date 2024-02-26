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
    setPorcentagemCongregacao((total * 40) / porcentagemTotal);

    setValorPorcentagemCongregacao((total * 40) / 100);
  };

  return (
    <div className="dashboard-container">
      <div className='menu'>
        <Menu />
      </div>
      <div className='principal'>
        <Head title="Despesas" />
      
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
              <td>R${valorPorcentagemCongregacao.toFixed(2)}</td>
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
