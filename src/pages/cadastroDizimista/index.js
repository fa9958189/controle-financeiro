import React, { useState } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { FaSave } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from 'react-router-dom'; 
import Head from '../../componente/Head';

export default function CadastroUsuario() {
    const navigate = useNavigate ();
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState("");
    
    const usuario = {
        id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
        nome,
        valor,
        data
    };
  
    function salvardados(e) {
        e.preventDefault();
        if (nome === "")
            alert("Preencha o campo nome");
        else if (valor === "")
            alert("Preencha o campo valor");
        else if (data === "")
            alert("Preencha o campo data");
        else {
            const banco = JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
            banco.push(usuario);
            localStorage.setItem("cd-usuarios", JSON.stringify(banco));
            alert("Usuário salvo com sucesso");
            navigate("/listardizimista"); // Redireciona para listardizimista
        }
    }

    return (
        <div className="dashboard-container">
            <div className='menu'>
                <Menu />
            </div>
            <div className='principal'>
                <Head title="Cadastro de Dizimista" />
                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvardados}>
                        <input 
                            type='text'
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            placeholder='Digite o nome do Dizimista'
                        /> 
                        <input 
                            type='text' 
                            value={valor}
                            onChange={e => setValor(e.target.value)}
                            placeholder='Digite o Valor' 
                        /> 
                        <input 
                            type='date' 
                            value={data}
                            onChange={e => setData(e.target.value)}
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
