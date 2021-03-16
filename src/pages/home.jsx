import React from 'react';
import Search from "../components/Search";
import Categories from "../components/categories";
import Rail from "../components/Rail"
import RailItem from "../components/RaiItem"
import {connect} from "react-redux"


import "../assets/style/App.scss"
import "../assets/style/components/railItem.scss"

const home = props => { 
return (
  
  <div className="App">

    <Search/>
    {console.log(props.myList)}
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
    myList: state.myList
  };
};
export default connect(mapStateToProps, null)(home);