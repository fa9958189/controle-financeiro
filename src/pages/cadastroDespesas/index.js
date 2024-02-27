// CadastroDespesas.js
import React, { useState } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { FaSave } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from 'react-router-dom'; 
import Head from '../../componente/Head';

export default function CadastroDespesas() {
    const navigate = useNavigate ();
    const [nomeDespesa, setNomeDespesa] = useState("");
    const [valorDespesa, setValorDespesa] = useState("");
    const [dataDespesa, setDataDespesa] = useState("");
    
    function salvarDespesa(e) {
        e.preventDefault();
        if (nomeDespesa === "")
            alert("Preencha o campo nome da despesa");
        else if (valorDespesa === "")
            alert("Preencha o campo valor da despesa");
        else if (dataDespesa === "")
            alert("Preencha o campo data da despesa");
        else {
            const despesa = {
                id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
                nome: nomeDespesa,
                valor: valorDespesa,
                data: dataDespesa
            };
            const banco = JSON.parse(localStorage.getItem("despesas") || "[]");
            banco.push(despesa);
            localStorage.setItem("despesas", JSON.stringify(banco));
            alert("Despesa salva com sucesso");
            navigate("/listardespesas"); // Redireciona para listardespesas
        }
    }

    return (
        <div className="dashboard-container">
            <div className='menu'>
                <Menu />
            </div>
            <div className='principal'>
                <Head title="Cadastro de Despesas" />
                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvarDespesa}>
                        <input 
                            type='text'
                            value={nomeDespesa}
                            onChange={e => setNomeDespesa(e.target.value)}
                            placeholder='Digite o nome da Despesa'
                        /> 
                        <input 
                            type='text' 
                            value={valorDespesa}
                            onChange={e => setValorDespesa(e.target.value)}
                            placeholder='Digite o Valor' 
                        /> 
                        <input 
                            type='date' 
                            value={dataDespesa}
                            onChange={e => setDataDespesa(e.target.value)}
                            placeholder='Digite a Data' 
                        /> 
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
