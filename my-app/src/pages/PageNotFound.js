import { Link } from "react-router-dom";
import '../styles/PageNotFound.css'

export default function PageNotFound(){
    return(
        <div id='pageNotFound'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to='/'><h3>Retourner sur la page d’accueil</h3></Link>
        </div>
    )
}