import React,{useEffect} from 'react';
import Search from "../components/Search";
import Categories from "../components/categories";
import Rail from "../components/Rail"
import RailItem from "../components/RaiItem"
import Loader from "../components/Loader"
import {connect} from "react-redux"
import {putMovies,setFavorites} from '../actions'


import "../assets/style/App.scss"
import "../assets/style/components/railItem.scss"

const home = props => {
  let loading = true;
  useEffect( () => {
    hanldePutMovies()
    loading = false;
  },props);
  const hanldePutMovies = async () =>{
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b89fc45c2067cbd33560270639722eae`);                    
    let res = await data.json();
    let peliculas = []
    for (let index = 0; index < 5; index++) {
      peliculas.push(res.results[index])
      
    }
    props.putMovies(peliculas)
  }

  // if(loading === true){
  //   return (<Loader></Loader>)}

return (

  
  <div className="App">
    {console.log(props)}
    <Search/>
     {props.myList.length != 0 &&( 
       
      <React.Fragment>
      <Categories  title="Mi Lista"></Categories>
      <Rail>
        {
        props.myList.map(e  => <RailItem key={e.id} {...e}></RailItem>)}

            
      </Rail>
      </React.Fragment> 
  

    ) }
      <Categories  title="Mas populares"></Categories>
      <Rail>
        {props.movies.map(e  => <RailItem  key={e.id} {...e}></RailItem>)}

            
      </Rail>


   
  </div>
)}
  

const mapStateToProps = state =>{
  return{
    movies: state.movies,
    myList: state.myList,
  };
};
const mapDispachToProps = {
  putMovies
};
export default connect(mapStateToProps, mapDispachToProps)(home);