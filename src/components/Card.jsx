import "./Card.css"
import arrow from "../assets/location.png"
export default function Card(props){
    return(
        <div>
            <div className="card">
                <img src={props.item.img} className="photo"/>
                <div className="text_div">
                    <span className="location_span">
                        <img className = "arrow" src = {arrow}/>
                        <p className="location_text">{props.item.location}</p>
                        <a className="location_view" href= {props.item.url}>View on Google Maps</a>
                    </span>
                    <h1>{props.item.name}</h1>
                    <h4>{props.item.duration}</h4>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}