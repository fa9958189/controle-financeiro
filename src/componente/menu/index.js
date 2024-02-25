import './styles.css';
import { Link } from 'react-router-dom';
import { FiUser, FiArchive, FiArrowDownCircle } from "react-icons/fi"; // Importando ícones do React

export default function Menu() {
    return (
        <div>
            <h1>Menu</h1>
            <nav>
                <Link to="/listardizimista" className='link'><FiUser className='icos' />Dizimista</Link> {/* Alterado para "listardizimista" */}
                <Link to="/listarporcentagem" className='link'><FiArchive className='icos' />Porcentagem</Link> {/* Alterado para "listarporcentagem" */}
                <Link to="/listarsaida" className='link'><FiArrowDownCircle className='icos' />Saída</Link>
            </nav>
        </div>
    )
}
