/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { putSeachData } from '../actions';
import searchData from '../hooks/searchData';
import SearchBar from '../components/Search';
import Categories from '../components/categories';

const home = (props) => {
  const { myList, search, popular, kids, comedy } = props;
  const { putSeachData } = props;
  const query = {
    popularity: '&sort_by=popularity.desc',
    key: props.id,
    language: 'language=es',
    gender: 'with_genres',
    certification: 'certification_country=US&&certification=R',
  };
  const url = `https://api.themoviedb.org/3/discover/movie?${query.key}${query.popularity}`;
  useEffect(() => {
    searchData(url, `${query.popularity}`).then(({ results }) => results && putSeachData({ data: results, key: 'popular' }));
    searchData(url, '&page=2').then(({ results }) => results && putSeachData({ data: results, key: 'kids' }));
    searchData(url, '&page=3').then(({ results }) => results && putSeachData({ data: results, key: 'comedy' }));
  }, []);
  if (search.length !== 0) {
    console.log(search);
    return (
      <>
        <SearchBar />
        <Categories title='Resultado' data={search} />
      </>
    );
  }
  return (
    <>
      <SearchBar />
      {myList.length !== 0 && <Categories title='My list' data={myList} /> }
      {popular && <Categories title='Rail1' data={popular} /> }
      {kids && <Categories title='Rail2' data={kids} /> }
      {comedy && <Categories title='Rail3' data={comedy} /> }
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
    user: null,
  };
};
const mapDispachToProps = {
  putSeachData,
};
// eslint-disable-next-line react/no-typos
home.PropTypes = {
  putSeachData: PropTypes.func,
};
export default connect(mapStateToProps, mapDispachToProps)(home);
