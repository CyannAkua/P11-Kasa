import '../styles/Banner.css'
import logo from '../assets/LOGO.svg'
import { Link } from "react-router-dom";

function Banner() {
    return (
    <div id='Banner'>
        <div>
            <img src={logo} alt="Kasa Logo"/>
        </div>
        <div>
        <Link to='/'>Accueil</Link>
        <Link to='/about'>A Propos</Link>
        </div>
    </div>
    )
}

export default Banner