import WidePic from "../components/WidePic";
import Gallery from '../components/Gallery'
import landingPicBg from '../assets/LandingPicBg.png'

export default function Accueil(){
    return(
        <div>
            <WidePic pic={landingPicBg} text='Chez vous, partout et ailleurs'/>
            <Gallery/>
        </div>
    )
}