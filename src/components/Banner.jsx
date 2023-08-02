import "./Banner.css"
import logo from "../assets/logo.png"
export default function Banner(props){
    return(
        <div className="banner">
            <img className="logo" src={logo}/>
            <h2>my travel journal.</h2>
        </div>
    )
}