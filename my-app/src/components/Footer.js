import logo from '../assets/LOGO.svg'
import '../styles/Footer.css'

function Footer(){
    return(
        <div id='footer'>
            <img src={logo}alt='Kasa Logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
export default Footer