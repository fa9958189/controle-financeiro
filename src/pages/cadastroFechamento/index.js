import React, { useState } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { FaSave } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from 'react-router-dom'; 
import Head from '../../componente/Head';

export default function CadastroFechamento() {
    const navigate = useNavigate ();
    const [valorDespesaMes, setValorDespesaMes] = useState("");
    const [saldoMes, setSaldoMes] = useState("");
    const [mesFechamento, setMesFechamento] = useState("Janeiro"); // Valor padrão
    const [ano, setAno] = useState(""); // Novo estado para armazenar o ano
    
    const mesesDoAno = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    function salvardados(e) {
        e.preventDefault();
        if (valorDespesaMes === "")
            alert("Preencha o campo Valor Despesa Mês");
        else if (saldoMes === "")
            alert("Preencha o campo Saldo Mês");
        else if (ano === "")
            alert("Preencha o campo Ano");
        else {
            const usuarioFechamento = {
                id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
                tipo: "fechamento", // Definindo o tipo como "fechamento"
                valorDespesaMes,
                saldoMes,
                mesFechamento,
                ano // Incluindo o ano no objeto do usuário de fechamento
            };
            const banco = JSON.parse(localStorage.getItem("cd-fechamento") || "[]");
            banco.push(usuarioFechamento);
            localStorage.setItem("cd-fechamento", JSON.stringify(banco));
            alert("Fechamento salvo com sucesso");
            navigate("/listarfechamento"); // Redireciona para listausuario
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
                            type='text'
                            value={valorDespesaMes}
                            onChange={e => setValorDespesaMes(e.target.value)}
                            placeholder='Despesa do Mês'
                        /> 
                        <input 
                            type='text' 
                            value={saldoMes}
                            onChange={e => setSaldoMes(e.target.value)}
                            placeholder='Saldo do Mês' 
                        /> 
                    
                        <select 
                            id="mesFechamento" 
                            value={mesFechamento} 
                            onChange={e => setMesFechamento(e.target.value)}
                        >
                            {mesesDoAno.map((mes, index) => (
                                <option key={index} value={mes}>{mes}</option>
                            ))}
                        </select>
                        
                        <input 
                            type='text' 
                            value={ano}
                            onChange={e => setAno(e.target.value)}
                            placeholder='Ano' 
                        />
                        
                        <div className='acao'>
                            <button type="submit" className='btn-save'>
                                <FaSave />
                                Salvar
                            </button>
                            <button type="button" className='btn-cancel'>
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
