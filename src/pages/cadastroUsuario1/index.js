import React, { useState } from 'react';
import '../../pages/global.css';
import { FaSave } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import Head from '../../componente/Head';
import './cadastro.css'; // Importe o arquivo CSS renomeado

export default function CadastroUsuario1() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const usuario = {
        email,
        senha
    }

    function salvardados(e) {
        e.preventDefault();
        if (email === "")
            alert("Preencha o campo email");
        else if (senha === "")
            alert("Preencha o campo senha");
        else {
            const banco = JSON.parse(localStorage.getItem("cd-usuarios1") || "[]");
            banco.push(usuario);
            localStorage.setItem("cd-usuarios1", JSON.stringify(banco));
            alert("Usuário salvo com sucesso");
            navigate("/Logon"); // Navegar de volta para a página de login
        }
    }

    return (
        <div className="dashboard-container">
            <Head title="Cadastro de Usuario" />
            <div className='form-container'>
                <form className='form-cadastro' onSubmit={salvardados}>
                    <input
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Digite o E-mail'
                    />
                    <input
                        type='text'
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        placeholder='Digite a Senha'
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
    )
}
