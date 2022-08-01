import arrow from '../assets/Arrow.svg'

import '../styles/Dropdown.css';
import { useState } from 'react';

function Dropdown(props){
    const [showMore, setShowMore] = useState(false)
    return (
        <div className='fulldropdown'>
            <div className='dropdown'>
                <p>{props.title}</p>
                <button className='btn' onClick={()=> setShowMore(!showMore)}>
                {showMore ? <img className='dropdown_arrow open' src={arrow}/> : <img className='dropdown_arrow' src={arrow}/>}
            </button>
            </div>
            {showMore ? <div className='extendedtext'>
                {props.innertext}
            </div> : null}
        </div>
    
    )
}


export default Dropdown
