import "./Header.css";
import { Link } from "react-router-dom";
import logo from '../../img/logo-blue-black-small.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
    return (
        <header>
            <div className="HeaderC">
                <img src={logo} alt="Logo" className="logo-image" />
                <div className="Nomes">
                    <Link to="/"><h1>Início</h1></Link>
                    <h1>Programação</h1>
                    <Link to="/Contact"><h1>Chamadas <i className="fas fa-chevron-down fa-xs"></i></h1></Link>
                    <h1>Inscrição</h1>
                    <h1>Local do Evento <i className="fas fa-chevron-down fa-xs"></i></h1>
                    <h1>WRSeg</h1>
                    <h1>Organização <i className="fas fa-chevron-down fa-xs"></i></h1>
                    <h1>Premiações</h1>
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/company/escoladeredes-errc/" target="_blank" rel="noopener noreferrer">
                        <p className="LinkedinText">Linkedin</p>
                    </a>
                </div>
            </div>
        </header>
    );
}
