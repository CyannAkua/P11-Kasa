import React, { useState } from 'react';
import arrow from '../assets/Arrow.svg'
import '../styles/Carousel.css'

export default function Carousel(props){
    let picture = props.picture
    
    const [currentPic, setCurrentPic] = useState(0)
    return(
        <div id='carousel'>
        {picture.length > 1 &&
        <div id='navigation'>
        <button className='btn left' onClick={()=>{currentPic > 0 ? setCurrentPic(currentPic -1) : setCurrentPic(picture.length - 1)}}><img src={arrow} id='left'/></button>
        <button className='btn right' onClick={()=>{currentPic == picture.length -1 ? setCurrentPic(0) : setCurrentPic(currentPic +1)}}><img src={arrow} id='right'/></button>
        <p>{currentPic+1}/{picture.length}</p>
        </div>}
        <div id='imageHold'>
            <img src={picture[currentPic]}/>
        </div>
    </div>)
}