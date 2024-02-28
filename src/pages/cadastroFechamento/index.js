// CadastroUsuario.js

import React, { useState } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { FaSave } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from 'react-router-dom'; 
import Head from '../../componente/Head';

export default function CadastroUsuario() {
    const navigate = useNavigate();
    const [valorDespesas, setValorDespesas] = useState(""); // Estado para o valor das despesas do mês
    const [saldoMes, setSaldoMes] = useState(""); // Estado para o saldo do mês
    const [mesFechamento, setMesFechamento] = useState(getMesPadrao()); // Estado para o mês do fechamento

    function getMesPadrao() {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Obtendo o mês atual
        return month; // Retornando o mês atual como padrão
    }

    function salvardados(e) {
        e.preventDefault();
        if (valorDespesas === "")
            alert("Preencha o campo Valor das Despesas do Mês");
        else if (saldoMes === "")
            alert("Preencha o campo Saldo do Mês");
        else {
            const fechamento = {
                valorDespesas,
                saldoMes,
                mesFechamento
            };
            const fechamentos = JSON.parse(localStorage.getItem("fechamentos") || "[]");
            fechamentos.push(fechamento);
            localStorage.setItem("fechamentos", JSON.stringify(fechamentos));
            alert("Fechamento salvo com sucesso");
            navigate("/listarfechamento"); // Redireciona para listarfechamento
        }
    }

    return (
        <div className="dashboard-container">
            <div className='menu'>
                <Menu />
            </div>
            <div className='principal'>
                <Head title="Cadastro de Fechamento" />
                
                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvardados}>
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
                                <FaSave />
                                Salvar
                            </button>
                            <button className='btn-cancel'>
                                <ImCancelCircle />
                                Cancelar
                            </button>  
                        </div> 
                    </form>
                </div>
            </div>       
        </div>
    );
}
