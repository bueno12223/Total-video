import React from "react"
require("babel-core/register");
require("babel-polyfill");

class useGetMovies extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    loading: true,
    error: null,
    movies: {
      // id: null,
      // name: '',
      // cover: '',
      // overview: '',
      // genres: '',
    },
  } }
 

  componentDidMount(){
    this.searchData()
  }
  async searchData(id){
    const key = "0c7a6b113add233831a0d6eec346cd98"
    try{
      const results = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
    const data = await results.json
    this.setState({loading: false, movies: data})
    }catch(error){
      this.setState({loading: false, error: error})
      console.error()
    } 
  }

  }
 
export default useGetMovies

