import Tag from '../components/Tag';
import data from '../data/logements.json'
import Dropdown from '../components/Dropdown';
import '../styles/Housing.css'
import {useParams,Navigate} from 'react-router-dom';
import star from '../assets/star.svg'
import Carousel from '../components/Carousel'

export default function Housing(){
    const { id } = useParams()
    let thisdata = data.find(data => data.id == id );
    const rating = [1,2,3,4,5]
    if(thisdata == undefined){
        return(
            <Navigate to="/404" replace={true}/>
        )
    }
    return(
        <div id='housing'>
            <Carousel picture={thisdata.pictures}/>
            <div id='title'>
                <h1>{thisdata.title}</h1>
                <h2>{thisdata.location}</h2>
            </div>
            <div id='tags'>
                {
                    thisdata.tags.map(tags =>{return(
                        <Tag key={tags} tag = {tags}/>
                    )})
                }
            </div>
            <div id= 'host'>
                <p>{thisdata.host.name}</p>
                <img src={thisdata.host.picture}/>
            </div>
            <div id='rating'>
                {
                rating.map(index=> {
                    if(index <= parseInt(thisdata.rating)){
                       return(<img key={index} src={star} className='filled'></img>) 
                    }
                    else{
                        return(<img key={index} src={star}></img>)
                    }
                    })
            }
            </div>
            <div id='Dropdowns'>
                <Dropdown key='Description' title='Description' innertext="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "/>
                <Dropdown key='Équipements' title='Équipements' innertext=
                {thisdata.equipments.map(equipements => {
                        return(<li key={equipements}>{equipements}</li>)})}/>
            </div>
        </div>
    )
}