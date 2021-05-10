import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/components/login.scss';

class login extends React.Component {
  render() {
    return (
      <section className='login'>
        <div className='login__container'>
          <h2>Inicia Sesión</h2>
          <form className='login__container--Form'>
            <input type='text' placeholder='Correo o usuario' className='input' />
            <input type='password' placeholder='Contraseña' className='input' />
            <div><button className='buttom'>Iniciar Sesión</button></div>
            <div className='login__remember'>
              <label>
                <input type='checkbox' id='caja#1' value='checkbox' />
                Recuerdame
              </label>
              <a href=''>Olvidé mi contraseña</a>

            </div>
          </form>
          <section className='login__conatiner--socialLogin'>
            <div>
              <img src='https://img.icons8.com/android/24/ffffff/facebook.png' />
              <p><a href=''>Iniciar sesión con Facebook</a></p>
            </div>
            <div>
              <img src='https://img.icons8.com/ios/50/ffffff/google-logo--v1.png' />
              <p><a href=''>Iniciar sesión con Google</a></p>
            </div>
            <div>
              <p className='login__register'>
                ¿No tienes cuenta? Registrate
                <Link to='/register'><a href=''>aquí</a></Link>
              </p>
            </div>

          </section>

        </div>

      </section>
    );
  }

}
export default login;
