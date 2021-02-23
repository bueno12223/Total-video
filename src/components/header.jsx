import React from "react"
import {Link} from "react-router-dom"

import "../assets/style/components/header.scss"

const header = () => {
    return(
        <header className="header">
        <div  className="header__containerImage">
            <Link to ="/">
            <img src="https://img.icons8.com/wired/64/ffffff/music-video.png" className="header__image" />
            </Link>
            <Link to="/"><p className="header__total">Total <b> Video</b></p></Link> 
            
            
            
        
            
        </div>
        <div className="header__user">
            <img src="https://img.icons8.com/wired/64/ffffff/change-user-male.png" className="header__userImage"/>
            <ul className="header__userText">
                <li><a href="">Cuenta</a></li>
                <Link to="/login"><li><a href="">Cerrar Sesión</a></li></Link>
            </ul>
        </div>
    </header>
    )

}
export default header