import React, { useState, useEffect } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import Head from '../../componente/Head';

export default function Editarusuario() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [banco, setBanco] = useState([]);

  useEffect(() => {
    mostrardados(id);
  }, []);

  function mostrardados(idu) {
    let listaUser = JSON.parse(localStorage.getItem("cd-usuarios"));
    listaUser
      .filter(value => value.id === idu)
      .map(value => {
        setNome(value.nome);
        setValor(value.valor);
        setData(value.data);
      });
  }

  function salvardados(e) {
    e.preventDefault();

    if (nome === "") {
      alert("Preencha o campo nome");
    } else if (valor === "") {
      alert("Preencha o campo valor");
    } else if (data === "") {
      alert("Preencha o campo data");
    } else {
      const usuario = {
        id,
        nome,
        valor,
        data
      };

      const banco = JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
      let dadosnovos = banco.filter(item => item.id !== id);
      dadosnovos.push(usuario);
      localStorage.setItem("cd-usuarios", JSON.stringify(dadosnovos));
      alert("Usuário salvo com sucesso");
      navigate('/listadizimista');
    }
  }

  return (
    <div className="dashboard-container">
      <div className='menu'>
        <Menu />
      </div>
      <div className='principal'>
        <Head title="Editar Usuário" />
        <div className='form-container'>
          <form className='form-cadastro' onSubmit={salvardados}>
            <input
              type='text'
              value={nome}
              onChange={e => setNome(e.target.value)}
              placeholder='Digite o nome do usuário'
            />
            <input
              type='text'
              value={valor}
              onChange={e => setValor(e.target.value)}
              placeholder='Digite o valor'
            />
            <input
              type='date'
              value={data}
              onChange={e => setData(e.target.value)}
              placeholder='Digite a data'
            />

            <div className='acao'>
              <button className='btn-save'>
                <FaSave />
                Salvar
              </button>
              <button className='btn-cancel'>
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
