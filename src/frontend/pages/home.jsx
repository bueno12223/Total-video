import React,{useEffect} from 'react';
import {connect} from "react-redux";
import {putPopularMovies, putKidsMovies, putRatedMovies,putComedyMovies,putSeachData} from '../actions';

import Search from "../components/Search";
import Categories from "../components/categories";
import Rail from "../components/Rail";
import RailItem from "../components/RaiItem";

import "../assets/style/components/categories.scss";



import "../assets/style/App.scss";
import "../assets/style/components/railItem.scss";

const home = props => {
  useEffect( () => {
    handlePutMovies();
    HandleGetKidsMovies();
    HandleGetRatedMovies();
    HanldleGetComedyMovies();
  },props);
 

  const handlePutMovies = async () =>{
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?${props.query.popularity}&${props.query.key}&${props.query.language}`);                    
    let res = await data.json();
    props.putPopularMovies(res.results);
  }
  const HandleGetKidsMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?${props.query.gender}=878&${props.query.popularity}&${props.query.key}&${props.query.language}`);                    
    let res = await data.json();
    props.putKidsMovies(res.results);  
  }
  const HandleGetRatedMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie/?${props.query.certification}&${props.query.popularity}&${props.query.key}&${props.query.language}`);                    
    let res = await data.json();
    props.putRatedMovies(res.results);  
  }
  const HanldleGetComedyMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?${props.query.gender}=35&${props.query.popularity}&${props.query.key}&${props.query.language}`);                    
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
    data: state.data,
    query: state.query
  };
};
const mapDispachToProps = {
  putPopularMovies, putKidsMovies, putRatedMovies,putComedyMovies, putSeachData
};
export default connect(mapStateToProps, mapDispachToProps)(home);