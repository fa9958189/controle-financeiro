import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { FiTrash } from "react-icons/fi";
import Head from '../../componente/Head';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
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

  return (
    <div className="dashboard-container">
      <div className='menu'>
        <Menu />
      </div>
      <div className='principal'>
        <Head title="Fechamento do Mês" />
        <Link to="/cadastrofechamento" className='btn-novo'>Entrada Fechamento</Link>
        <Link to="/dashboardfechamento" className='btn-dash'>Dashboard Fechamento</Link>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Valor Dízimo</th>
                <th>Valor Despesa</th>
                <th>Mês</th>
                <th>Ano</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {banco.map((usu) => (
                <tr key={usu.id}>
                  <td>{parseFloat(usu.saldoMes).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td>{parseFloat(usu.valorDespesaMes).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className={parseInt(usu.saldoMes) > parseInt(usu.valorDespesaMes) ? 'mes-verde' : 'mes-vermelho'}>{usu.mesFechamento}</td>
                  <td>{usu.ano}</td>
                  <td className='botoes'>
                    <FiTrash
                      size={18}
                      color='red'
                      onClick={() => apagar(usu.id)}
                      cursor="pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
