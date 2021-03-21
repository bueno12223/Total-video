import React from "react";
import {Link }from 'react-router-dom';
import {connect} from "react-redux";
import {registerSubmit} from '../actions';

import "../assets/style/components/login.scss"

const register = (props) => {
    let data  = {
        email: '', 
        password: '', 
        userId: '',
        checkbox: false
    };
    const handleUserData = e => { 
        data = { 
            ...data,
            [e.target.name]: e.target.value};
    };

    const handleregisterSubmit= () =>{
        props.registerSubmit(data);
    };
    return(
            <section className="login">
        <div className="login__container">
            <h2>Regístrate</h2>
            <form className="login__container--Form">
                <input type="text" name={'userId'} placeholder="Usuario" className="input" onChange={e => handleUserData(e)}/>
                <input type="email" name={'email'} placeholder="Correo" className="input" onChange={e => handleUserData(e) }/>
                <input type="password" name={'password'} placeholder="Contraseña" className="input" onChange={e => handleUserData(e) }/>
                <input type="password" placeholder="Repite tu contraseña" className="input" />
                <div><Link to='/'><button className="buttom" onClick={handleregisterSubmit}>Registrarme</button></Link></div>
                <div  className="login__remember">
                    <label>
                        <input type="checkbox" id="caja#1" value="checkbox"/>Acepto
                    </label>
                    <a href="">términos y condiciones</a>

                </div>
            </form>
            <section className="login__conatiner--socialLogin">
                <div>
                    <img src="https://img.icons8.com/android/24/ffffff/facebook.png"/>
                    <p><a href="">Registrate con Facebook</a></p>
                </div>
                <div>
                    <img src="https://img.icons8.com/ios/50/ffffff/google-logo--v1.png"/>
                    <p><a href="">Registrate con Google</a></p>
                </div>
            </section>
        </div>  
    </section>
        )}
const mapDispachToProps = {
    registerSubmit,
}
export default connect(null, mapDispachToProps)(register);