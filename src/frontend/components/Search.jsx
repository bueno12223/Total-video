import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { putSeachData } from '../actions';
import searchData from '../hooks/searchData';
import '../assets/style/components/search.scss';

const Search = ({ putSeachData }) => {
  const [search, setSearch] = useState('');
  const url = 'https://api.themoviedb.org/3/search/movie?&api_key=b89fc45c2067cbd33560270639722eae&language=es';
  const searchIcon = 'https://img.icons8.com/ios-glyphs/24/ffffff/google-web-search.png';
  searchData(url, `&query=${search}`).then((data) => data && putSeachData({ data, key: 'search' }));
  if (!search) {
    putSeachData({ data: [], key: 'search' });
  }
  return (
    <section className='search'>
      <article className='search__titleContainer'>
        <h1 className='search_title'>¿Que deseas ver hoy?</h1>
      </article>
      <article className='search__inputContainer'>
        <input className='search_input' type='text' placeholder='buscar..' onChange={(e) => setSearch(e.target.value)} />
        <img src={searchIcon} alt='search icon' />
      </article>
    </section>
  );
};
const mapDispachToProps = {
  putSeachData,
};
// eslint-disable-next-line react/no-typos
Search.PropTypes = {
  putSeachData: PropTypes.func,
};
export default connect(null, mapDispachToProps)(Search);
