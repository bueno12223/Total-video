import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import '../assets/style/player.scss';
import axios from 'axios';

const player = (props) => {
  // const { id } = match.params;
  const [data, setData] = useState([]);
  useEffect(async () => {
    result = await axios(`https://api.themoviedb.org/3/movie/${parseFloat(id)}/videos?language=es${key}`);
    setData([...result.data.results]);
  }, []);
  console.log({ state, match });
  const { id: key } = state;
  const { params: { id }} = match;

  return (
    <>
      <div className='player__videoContainer'>
        {data[0] && (
          data.map((e) => (
            <iframe
              title='f'
              className='player__video'
              src={`https://www.youtube.com/embed/${e.key}?autoplay=1&mute=1`}
            />
          )))}

      </div>

      <Link to='/'><button type='button' className='player__button'>Regresar</button></Link>

    </>

  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
const ShowTheLocationWithRouter = withRouter(player);
export default connect(mapStateToProps, null)(ShowTheLocationWithRouter);
