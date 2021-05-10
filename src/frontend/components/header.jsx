import React from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import { connect } from 'react-redux';
import '../assets/style/components/header.scss';

const header = (props) => {
  const { email } = props;
  const logo = 'https://img.icons8.com/wired/64/ffffff/music-video.png';
  return (
    <header className='header'>
      <section className='header__containerImage'>
        <Link to='/'>
          <img src={logo} className='header__image' alt='total video logo' />
          <p className='header__total'>TotalVideo</p>
        </Link>
      </section>
      <section className='header__user'>
        <img src={email ? `https://www.gravatar.com/avatar/${md5(email)}?d=identicon` : logo} className='header__userImage' alt='user avatar' />
        <ul className='header__userText'>
          {email && (<li><Link to='/'>Cuenta</Link></li>)}
          <li><Link to='/login'>{email ? 'Cerrar sesión' : 'Iniciar Sesión' }</Link></li>
        </ul>
      </section>
    </header>
  );
};

const mapStateToProps = (state) => {
  return { email: state.user.email };
};

export default connect(mapStateToProps, null)(header);
