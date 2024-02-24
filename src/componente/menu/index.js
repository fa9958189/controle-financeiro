import './styles.css';
import { Link } from 'react-router-dom';
import { FiUser, FiPackage, FiArrowUpCircle, FiArchive, FiArrowDownCircle } from "react-icons/fi"; // Importando ícones do React

export default function Menu() {
    return (
        <div>
            <h1>Menu</h1>
            <nav>
                <Link to="/listausuario" className='link'><FiUser className='icos' />Usuário</Link> {/* Adicionando ícone de usuário */}
                <Link to="/listaestoque" className='link'><FiArchive className='icos' />Estoque</Link> {/* Adicionando ícone de estoque */}
                <Link to="/listarsaida" className='link'><FiArrowDownCircle className='icos' />Saída</Link> {/* Adicionando ícone de saída */}          
            </nav>
        </div>
    )
}
