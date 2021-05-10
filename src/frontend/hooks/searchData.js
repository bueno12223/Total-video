import axios from 'axios';

const SearchData = async (url, query) => {
  let movieList;
  try {
    if (query) {
      const result = await axios(`${url}${query}`);
      movieList = result.data.results;
      return movieList;
    }
  } catch (e) {
    movieList = null;
    return movieList;
  }
  console.log(movieList);
  return movieList;
};
export default SearchData;
