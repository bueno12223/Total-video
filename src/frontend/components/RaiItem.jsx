/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import add from '../assets/images/estrella.png';
import play from '../assets/images/play.png';
import '../assets/style/components/railItem.scss';

const railitem = (props) => {
  const { poster_path, id, overview, title } = props;
  return (
    <li className='rail__item' id={id}>
      <img className='rail__item-cover' src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt='poster path' />
      <div className='rail_info'>
        <h4 className='rail__info-title'>{title}</h4>
        <p className='rail__info-overview'>{overview}</p>
      </div>
      <div className='rail__item-buttons'>
        <img src={add} alt='add' />
        <Link to={`/player/${id}`}><img src={play} className='rail__itemPlay' alt='play' /></Link>
      </div>
    </li>
  );
};
export default connect(null, null)(railitem);
