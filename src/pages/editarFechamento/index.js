import React, { useState, useEffect } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { MdCancel } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router-dom';
import Head from '../../componente/Head';

export default function EditarFechamento() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [valorDespesas, setValorDespesas] = useState("");
  const [saldoMes, setSaldoMes] = useState("");
  const [mesFechamento, setMesFechamento] = useState("");
  const [fechamentos, setFechamentos] = useState([]);

  useEffect(() => {
    mostrarDados(id);
  }, []);

  function mostrarDados(idFechamento) {
    let listaFechamentos = JSON.parse(localStorage.getItem("fechamentos"));
    listaFechamentos
      .filter(fechamento => fechamento.id === idFechamento)
      .map(fechamento => {
        setValorDespesas(fechamento.valorDespesas);
        setSaldoMes(fechamento.saldoMes);
        setMesFechamento(fechamento.mesFechamento);
      });
  }

  function salvarDados(e) {
    e.preventDefault();

    if (valorDespesas === "") {
      alert("Preencha o campo Valor das Despesas do Mês");
    } else if (saldoMes === "") {
      alert("Preencha o campo Saldo do Mês");
    } else if (mesFechamento === "") {
      alert("Preencha o campo Mês do Fechamento");
    } else {
      const fechamento = {
        id,
        valorDespesas,
        saldoMes,
        mesFechamento
      };

      const fechamentosAtualizados = fechamentos.map(fechamento => {
        if (fechamento.id === id) {
          return {
            ...fechamento,
            valorDespesas,
            saldoMes,
            mesFechamento
          };
        }
        return fechamento;
      });

      localStorage.setItem("fechamentos", JSON.stringify(fechamentosAtualizados));
      alert("Fechamento atualizado com sucesso");
      navigate('/listarfechamento');
      setFechamentos(fechamentosAtualizados); // Atualiza a lista de fechamentos
    }
  }

  return (
    <div className="dashboard-container">
      <div className='menu'>
        <Menu />
      </div>
      <div className='principal'>
        <Head title="Editar Fechamento" />
        <div className='form-container'>
          <form className='form-cadastro' onSubmit={salvarDados}>
            <input
              type='number'
              value={valorDespesas}
              onChange={e => setValorDespesas(e.target.value)}
              placeholder='Valor das Despesas do Mês'
            />
            <input
              type='number'
              value={saldoMes}
              onChange={e => setSaldoMes(e.target.value)}
              placeholder='Saldo do Mês'
            />
            <select
              value={mesFechamento}
              onChange={e => setMesFechamento(e.target.value)}
            >
              <option value="01">Janeiro</option>
              <option value="02">Fevereiro</option>
              <option value="03">Março</option>
              <option value="04">Abril</option>
              <option value="05">Maio</option>
              <option value="06">Junho</option>
              <option value="07">Julho</option>
              <option value="08">Agosto</option>
              <option value="09">Setembro</option>
              <option value="10">Outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>

            <div className='acao'>
              <button className='btn-save'>
                <FiEdit />
                Editar
              </button>
              <button className='btn-cancel' onClick={() => navigate('/listarfechamento')}>
                <MdCancel />
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
