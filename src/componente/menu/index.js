import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiUser, FiArchive, FiArrowDownCircle, FiBarChart2, FiList } from "react-icons/fi"; // Importando ícones do React

export default function Menu() {
    return (
        <div>
            <h1>Menu</h1>
            <nav>
                <Link to="/listardizimista" className='link'><FiUser className='icos' />Dizimista</Link>
                <Link to="/listarporcentagem" className='link'><FiArchive className='icos' />Porcentagem</Link>
                <Link to="/listardespesas" className='link'><FiArrowDownCircle className='icos' />Despesas</Link>
                <Link to="/listardashboard" className='link'><FiBarChart2 className='icos' />Painel</Link>
                <Link to="/listarfechamento" className='link'><FiList className='icos' />Fechamento</Link> {/* Adicionando o link para listarFechamento */}
            </nav>
        </div>
    )
}
