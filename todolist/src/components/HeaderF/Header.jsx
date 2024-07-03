import "./Header.css";
import { Link } from "react-router-dom";
import logo from '../../img/logo-blue-black-small.png'
export default function Header(){
    return(
        <header>
            <div className="HeaderC">
                <img src={logo} alt="Logo" className="logo-image" />
                <Link to="/"><h1>Início</h1></Link>
                <h1>Programação</h1>
                <Link to="/Contact"><h1>Chamadas</h1></Link>
                <h1>Inscrição</h1>
                <h1>Local do Evento</h1>
                <h1>WRSeg</h1>
                <h1>Organização</h1>
                <h1>Premiações</h1>


            </div>
        </header>
    )
}