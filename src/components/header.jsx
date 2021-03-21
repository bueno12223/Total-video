import React from "react";
import {Link} from "react-router-dom";
import md5 from 'md5';
import {connect} from 'react-redux'

import "../assets/style/components/header.scss"
import { registerSubmit } from "../actions";

const header = (props) => {
    const handleregisterSubmit = () => {
        props.registerSubmit({
            email: '',
            userId: '',
            password: ''
        })
    }
    return(
        <header className="header">
        <div  className="header__containerImage">
            <Link to ="/">
            <img src="https://img.icons8.com/wired/64/ffffff/music-video.png" className="header__image" />
            </Link>
            <Link to="/"><p className="header__total">Total <b> Video</b></p></Link> 
        </div>
        <div className="header__user">

            <img src={props.email? `https://www.gravatar.com/avatar/${md5(props.email)}?d=identicon` : `https://img.icons8.com/wired/64/ffffff/change-user-male.png`}  className="header__userImage"/>
            <ul className="header__userText">
                {props.email &&(<Link to="/"><li><a href="">Cuenta</a></li></Link>)}
                <Link to="/login" onClick={handleregisterSubmit}><li><a  href="">{props.email? `Cerrar sesión`: `Iniciar Sesión` }</a></li></Link>
            </ul>
        </div>
    </header>
    )}


const mapStateToProps = state => {
    return{email: state.user.email}
}
const mapDispachToProps = {
    registerSubmit,
}

export default connect(mapStateToProps, mapDispachToProps)(header)