import React, { useState, useEffect } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { Link } from 'react-router-dom';
import Head from '../../componente/Head';
import { FiEdit, FiTrash } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function ListarFechamento() {
  const [fechamentos, setFechamentos] = useState([]);

  useEffect(() => {
    atualizarFechamentos();
  }, []);

  const atualizarFechamentos = () => {
    const fechamentosFromLocalStorage = JSON.parse(localStorage.getItem("fechamentos") || "[]");
    setFechamentos(fechamentosFromLocalStorage);
  };

  const handleExcluir = (id) => {
    const novosFechamentos = fechamentos.filter(fechamento => fechamento.id !== id);
    setFechamentos(novosFechamentos);
    localStorage.setItem("fechamentos", JSON.stringify(novosFechamentos));
  };

  const apagar = (id) => {
    confirmAlert({
      title: 'Excluir Fechamento',
      message: 'Deseja realmente excluir este Fechamento?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => handleExcluir(id)
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
        <Head title="Fechamento" />
        <Link to="/cadastrofechamento" className='btn-novo'>Fechamento</Link>

        <h2>Fechamentos</h2>
        <table>
          <thead>
            <tr>
              <th>Valor das Despesas</th>
              <th>Saldo do Mês</th>
              <th>Mês do Fechamento</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {fechamentos.map((fechamento, index) => (
              <tr key={index}>
                <td>{fechamento.valorDespesas}</td>
                <td>{fechamento.saldoMes}</td>
                <td>{fechamento.mesFechamento}</td>
                <td className='botoes'>
                  <Link to={`/editarfechamento/${index}`}>
                    <FiEdit size={18} color='yellow' />
                  </Link>
                </td>
                <td className='botoes'>
                  <FiTrash
                    size={18}
                    color='red'
                    onClick={() => apagar(index)}
                    cursor="pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
