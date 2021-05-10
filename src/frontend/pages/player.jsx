import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchData from '../hooks/searchData';
import '../assets/style/player.scss';

const player = (props) => {
  const { id } = props.match.params;
  const { id: key } = props.state;
  const [video, setVideo] = useState({});
  const [data, setData] = useState({});
  const URL = 'https://api.themoviedb.org/3/movie/';
  const paramsToData = `${id}?${key}`;
  const paramsToVideo = `${id}/videos?language=es${key}`;
  useEffect(async () => {
    SearchData(URL, paramsToData).then((data) => setData(data));
    SearchData(URL, paramsToVideo).then((data) => setVideo({ ...data.results[0] }));
  }, []);
  const styles = {
    backgroundImage: `linear-gradient(
      to bottom,
      rgba(0,0,0, 0),
      rgba(255 255 255)
    ),url(https://image.tmdb.org/t/p/w342${data.poster_path})`,
  };
  console.log(video);
  return (
    <section className='player__video'>
      <header className='player__videoHeader'>
        <div style={styles} />
        <div>
          <h2 className='player__video-Title'>{data.original_title}</h2>
          <p className='player__video-Overview'>{data.overview}</p>
          <Link to='/'><button type='button' className='player__button'>Regresar</button></Link>
        </div>
        <div className='player__videoContainer'>
          <iframe
            title={video.name}
            className='player__video'
            src={`https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1`}
          />

        </div>
      </header>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
const ShowTheLocationWithRouter = withRouter(player);
export default connect(mapStateToProps, null)(ShowTheLocationWithRouter);
