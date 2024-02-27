import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';
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
      
        {/* Gráfico de despesas */}
        <div style={{ width: '500px', height: '300px', margin: 'auto', backgroundColor: 'transparent' }}>
          <Chart
            chartType="ColumnChart"
            loader={<div>Carregando Gráfico</div>}
            data={[
              ['Despesa', 'Valor'],
              ...despesas.map(despesa => [despesa.nome, parseFloat(despesa.valor)])
            ]}
            options={{
              title: 'Despesas por Categoria',
              chartArea: { width: '50%' },
              hAxis: {
                title: 'Valor',
                minValue: 0,
              },
              vAxis: {
                title: 'Despesa',
              },
              backgroundColor: 'transparent',
              legendTextStyle: { color: 'white' }, // Define a cor das legendas como branca
              textStyle: { color: 'white' } // Define a cor do texto no gráfico como branca
            }}
          />
        </div>
      
        {/* Tabela de despesas */}
        <div className="table-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          <h2>Despesas Dashboard</h2>
 
          <div style={{ marginTop: '20px', textAlign: 'center', color: 'white' }}>
            <p>Valor das despesas: R${valorDespesas.toFixed(2)}</p>
            <p>Valor restante para a congregação: R${valorRestanteCongregacao.toFixed(2)}</p>
          </div>
          <div style={{ marginTop: '20px', textAlign: 'center', color: valorRestanteCongregacao < 0 ? 'red' : 'white' }}>
            {valorRestanteCongregacao < 0 ? 'A congregação já gastou toda sua renda' : ''}
          </div>
        </div>
      </div>
    </div>
  );
}
