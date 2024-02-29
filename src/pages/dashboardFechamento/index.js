import React from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import Head from '../../componente/Head';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import './style.css'; // Importe o arquivo de estilo aqui

export default function Listausuario() {
  const banco = JSON.parse(localStorage.getItem("cd-fechamento") || "[]");

  const removerUsuario = (id) => {
    const novosUsuarios = banco.filter(usuario => usuario.id !== id);
    localStorage.setItem("cd-fechamento", JSON.stringify(novosUsuarios));
    window.location.reload();
  };

  const apagar = (id) => {
    confirmAlert({
      title: 'Excluir Usuario',
      message: 'Deseja realmente excluir esse Usuario?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => removerUsuario(id)
        },
        {
          label: 'Não',
          onClick: () => alert('Clique em Não')
        }
      ]
    });
  };

  const data = banco.map(usu => ({
    saldo: usu.saldoMes,
    mes: usu.mesFechamento,
    ano: usu.ano
  }));

  return (
    <div className="dashboard-container">
      <div className='menu'>
        <Menu />
      </div>
      <div className='principal'>
        <Head title="Fechamento do Mês" />
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="saldo" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
