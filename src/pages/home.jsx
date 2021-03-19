import React,{useEffect} from 'react';

import Search from "../components/Search";
import Categories from "../components/categories";
import Rail from "../components/Rail";
import RailItem from "../components/RaiItem";
import Loader from "../components/Loader";
import {connect} from "react-redux";
import "../assets/style/components/categories.scss";
import {putPopularMovies, putKidsMovies, putRatedMovies,putComedyMovies,putSeachData} from '../actions';


import "../assets/style/App.scss";
import "../assets/style/components/railItem.scss";

const home = props => {
  const query = {
    popularity: 'sort_by=popularity.desc',
    key: 'api_key=b89fc45c2067cbd33560270639722eae',
    language: 'language=es',
    gender: 'with_genres',
    certification: 'certification_country=US&&certification=R'
  }
  useEffect( () => {
    handlePutMovies();
    HandleGetKidsMovies();
    HandleGetRatedMovies();
    HanldleGetComedyMovies();
  },props);
 

  const handlePutMovies = async () =>{
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?${query.popularity}&${query.key}&${query.language}`);                    
    let res = await data.json();
    props.putPopularMovies(res.results);
  }
  const HandleGetKidsMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?${query.gender}=878&${query.popularity}&${query.key}&${query.language}`);                    
    let res = await data.json();
    props.putKidsMovies(res.results);  
  }
  const HandleGetRatedMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie/?${query.certification}&${query.popularity}&${query.key}&${query.language}`);                    
    let res = await data.json();
    props.putRatedMovies(res.results);  
  }
  const HanldleGetComedyMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?${query.gender}=35&${query.popularity}&${query.key}&${query.language}`);                    
    let res = await data.json();
    props.putComedyMovies(res.results);  
  } 
  if(props.data.length != 0){
    return(
      <React.Fragment>
        <Search />
       
       <Rail>
         { props.data.map(e  => <RailItem key={e.id} {...e}></RailItem>)}  
       </Rail>
       </React.Fragment>
    )}

return (
  <div className="App">
    <Search />
    
     {props.myList.length != 0 &&( 
       
      <React.Fragment>
      <Rail>
        {
        props.myList.map(e  => <RailItem key={e.id} {...e}></RailItem>)}

            
      </Rail>
      </React.Fragment> 
  

    ) }
      <Categories  title="Mas populares"></Categories>
      <Rail>
        
        {props.popular.map(e  => <RailItem  key={e.id} {...e}></RailItem>)} 
      </Rail>
      <Categories  title="Acción"></Categories>
      <Rail>
        {props.kids.map(e  => <RailItem  key={e.id} {...e}></RailItem>)}
      </Rail>
      <Categories  title="Mejores puntaciones"></Categories>
      <Rail>
        {props.rated.map(e  => <RailItem  key={e.id} {...e}></RailItem>)}
      </Rail>
      <Categories  title="Comedia"></Categories>
      <Rail>
        {props.comedy.map(e  => <RailItem  key={e.id} {...e}></RailItem>)}
      </Rail>
      


   
  </div>
)}
  

const mapStateToProps = state =>{
  return{
    popular: state.popular,
    kids: state.kids,
    comedy: state.comedy,
    rated: state.rated,
    myList: state.myList,
    data: state.data
  };
};
const mapDispachToProps = {
  putPopularMovies, putKidsMovies, putRatedMovies,putComedyMovies, putSeachData
};
export default connect(mapStateToProps, mapDispachToProps)(home);