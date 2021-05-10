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
  console.log(popular);
  const { putSeachData } = props;
  const query = {
    popularity: '&sort_by=popularity.desc',
    key: '&api_key=b89fc45c2067cbd33560270639722eae',
    language: 'language=es',
    gender: 'with_genres',
    certification: 'certification_country=US&&certification=R',
  };
  const url = `https://api.themoviedb.org/3/discover/movie?${query.key}${query.popularity}`;
  useEffect(() => {
    searchData(url, `${query.popularity}`).then((data) => data && putSeachData({ data, key: 'popular' }));
    searchData(url, `${query.gender}=28`).then((data) => data && putSeachData({ data, key: 'kids' }));
    searchData(url, `${query.gender}=2`).then((data) => data && putSeachData({ data, key: 'comedy' }));
  }, []);
  if (search.length !== 0) {
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
      {popular && <Categories title='Popular' data={popular} /> }
      {kids && <Categories title='Kids' data={kids} /> }
      {comedy && <Categories title='comedy' data={comedy} /> }
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
