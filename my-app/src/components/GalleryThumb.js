
import '../styles/GalleryThumb.css'
import {Link} from "react-router-dom";
export default function GalleryThumb(props){
    return(
        <Link to = {'house/'+ props.id }>
            <div className = 'galleryThumb'>
                <div>
                    <div className='overlay'></div>
                    <img src={props.thumbnail} alt=''/>
                </div>
                <p>{props.title}</p>
            </div>
        </Link>
    )
}
