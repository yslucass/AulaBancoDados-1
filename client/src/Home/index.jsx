import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div className='container'>
            <h2>Sistema Acadêmico</h2>
            <div className="card-container">
                <Link to="/matricula/cadastrar" className="card">
                    <div>Registrar Carro</div>
                </Link>
                <Link to="/matriculas" className="card">
                    <div>Lista de Carros</div>
                </Link>
                <Link to="/matriculas/alterar" className="card">
                    <div>Editar Carro</div>
                </Link>
            </div>
        </div>
    );
}
