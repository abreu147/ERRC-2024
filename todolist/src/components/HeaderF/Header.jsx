import "./Header.css";
import { Link } from "react-router-dom";
import logo from '../../img/logostd.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';

export default function Header() {
    const [dropdown, setDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdown(true);
    };

    const handleMouseLeave = () => {
        setDropdown(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setDropdown(false);
        setMenuOpen(false);
    };

    return (
        <header>
            <div className="HeaderC">
                <button className="hamburger" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </button>
                <img src={logo} alt="Logo" className="logo-image" />
                <div className={`Nomes ${menuOpen ? 'show' : ''}`}>
                    <Link to="/" onClick={closeMenu}><h1>Início</h1></Link>
                    <Link to="/Programacao" onClick={closeMenu}><h1>Programação</h1></Link>
                    
                    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <h1>Chamadas<i className="fas fa-chevron-down fa-xs"></i></h1>
                        {dropdown && (
                            <div className="dropdown-content">
                                <Link to="/ChamadaErrc2024" onClick={closeMenu}>Chamada ERRC 2024</Link>
                                <Link to="/ChamadaWrseg2024" onClick={closeMenu}>Chamada WRSeg 2024</Link>
                                <Link to="/SugestoesAutores" onClick={closeMenu}>Sugestões aos Autores</Link>
                            </div>
                        )}
                    </div>

                    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <h1>Local do evento<i className="fas fa-chevron-down fa-xs"></i></h1>
                        {dropdown && (
                            <div className="dropdown-content">
                                <Link to="/Localizacao" onClick={closeMenu}>Localização</Link>
                                <Link to="/Hospedagem" onClick={closeMenu}>Hospedagem</Link>
                                <Link to="/Alimentacao" onClick={closeMenu}>Alimentação</Link>
                            </div>
                        )}
                    </div>

                    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <h1>Organização<i className="fas fa-chevron-down fa-xs"></i></h1>
                        {dropdown && (
                            <div className="dropdown-content">
                                <Link to="/Edicao2024" onClick={closeMenu}>Edição 2024</Link>
                                <Link to="/EdicoesAnteriores" onClick={closeMenu}>Edições  Anteriores</Link>
                                <Link to="/ComiteAcessor" onClick={closeMenu}>Comitê Assessor</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/Inscricoes" onClick={closeMenu}><h1>Inscrição</h1></Link>
                    <Link to="/WRSeg" onClick={closeMenu}><h1>WRSeg</h1></Link>
                    <Link to="/Premiacoes" onClick={closeMenu}><h1>Premiações</h1></Link>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/company/escoladeredes-errc/" target="_blank" rel="noopener noreferrer">
                            <p className="LinkedinText">Linkedin</p>
                        </a>
                    </div>
                </div>
                <div></div>
            </div>
        </header>
    );
}
