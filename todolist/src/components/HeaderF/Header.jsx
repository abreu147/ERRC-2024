import "./Header.css";
import { Link } from "react-router-dom";
import logo from '../../img/LogoC3BrancoG.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';

export default function Header() {
    const [dropdown, setDropdown] = useState(false);

    const handleMouseEnter = () => {
        setDropdown(true);
    };

    const handleMouseLeave = () => {
        setDropdown(false);
    };

    return (
        <header>
            <div className="HeaderC">
                <img src={logo} alt="Logo" className="logo-image" />
                <div className="Nomes">
                    <Link to="/Studing-react"><h1>Início</h1></Link>
                    <Link to="/Programacao"><h1>Programação</h1></Link>
                    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <h1>Chamadas <i className="fas fa-chevron-down fa-xs"></i></h1>
                        {dropdown && (
                            <div className="dropdown-content">
                                <Link to="/ChamadaErrc2023">Chamada ERRC 2024</Link>
                                <Link to="/ChamadaWrseg2023">Chamada WRSeg 2024</Link>
                                <Link to="/SugestoesAutores">Sugestões aos Autores</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/Inscricoes"><h1>Inscrição</h1></Link>

                    {/* <h1>Local do Evento <i className="fas fa-chevron-down fa-xs"></i></h1> */}
                    
                    <Link to="/WRSeg"><h1>WRSeg</h1></Link>

                    {/* <h1>Organização <i className="fas fa-chevron-down fa-xs"></i></h1> */}

                    <Link to="/Premiacoes"><h1>Premiações</h1></Link>
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
