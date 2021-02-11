import React from "react"

import "../assets/style/components/header.scss"

const header = () => {
    return(
        <header className="header">
        <div  className="header__containerImage">
        
            <img src="https://img.icons8.com/wired/64/ffffff/music-video.png" className="header__image" />
            <p>Total Video</p>
        </div>
        <div className="header__user">
            <img src="https://img.icons8.com/wired/64/ffffff/change-user-male.png" className="header__userImage"/>
            <ul className="header__userText">
                <li><a href="">Cuenta</a></li>
                <li><a href="">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
    )

}
export default header