import GalleryThumb from './GalleryThumb'
import data from '../data/logements.json'
import '../styles/Gallery.css'
export default function Gallery(){
    return (
        <div id='gallery'>
            <div id='galleryHold'>
            {
                data.map(thisdata => {
                    return(
                        <GalleryThumb key={thisdata.id} id={thisdata.id} title={thisdata.title} thumbnail={thisdata.cover}/>
                    )
                })
            }
            </div>
        </div>
    )
}