import '../styles/WidePic.css'

export default function WidePic(props) {
    return (
        <div className='widePic'>
            <img src={props.pic} alt=''/>
            <h2>{props.text}</h2>
        </div>
    )
}