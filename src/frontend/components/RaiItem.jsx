/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavoite } from '../actions';
import add from '../assets/images/estrella.png';
import play from '../assets/images/play.png';
import '../assets/style/components/railItem.scss';

const railitem = (props) => {
  const { poster_path, id, overview, title, isFavorite } = props;
  const { setFavorite, deleteFavoite } = props;
  return (
    <li className='rail__item' id={id}>
      <img className='rail__item-cover' src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt='poster path' />
      <div className='rail_info'>
        <h4 className='rail__info-title'>{title}</h4>
        <p className='rail__info-overview'>{overview}</p>
      </div>
      <div className='rail__item-buttons'>
        {isFavorite ?
          <img src='https://img.icons8.com/flat-round/64/000000/delete-sign.png' alt='delet favorite' onClick={() => deleteFavoite(id)} /> :
          <img src={add} alt='add' onClick={() => setFavorite({ poster_path, id, overview, title, isFavorite: true })} />}

        <Link to={`/player/${id}`}><img src={play} className='rail__itemPlay' alt='play' /></Link>
      </div>
    </li>
  );
};
const mapDispachToProps = {
  setFavorite,
  deleteFavoite,
};
// eslint-disable-next-line react/no-typos
railitem.PropTypes = {
  setFavorite: PropTypes.func,
  deleteFavoite: PropTypes.func,
};
export default connect(null, mapDispachToProps)(railitem);
