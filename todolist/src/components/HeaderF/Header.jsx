import "./Header.css";
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <header>
            <div className="HeaderC">
                <Link to="/"><h1>Home</h1></Link>
                <h1>Em criação</h1>
                <Link to="/Contact"><h1>Contact</h1></Link>


            </div>
        </header>
    )
}