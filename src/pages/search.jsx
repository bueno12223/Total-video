
import {Link} from 'react-router-dom'
import React from 'react';
import Search from "../components/Search";
import Rail from "../components/Rail"
import RailItem from "../components/RaiItem"
import Loader from "../components/Loader"
import {connect} from "react-redux"
import "../assets/style/components/categories.scss"
import "../assets/style/App.scss"

const search = props => {
  if(props.data.length != 0){
    return(
      <React.Fragment>
        <Search />
       <Link to='/'><p className="rail_title">Regresar</p></Link>
       <Rail>
         { props.data.results.map(e  => <RailItem key={e.id} {...e}></RailItem>)}  
       </Rail>
       </React.Fragment>
    )
  }if(props.data.total_results == 0 )(
    <React.Fragment>
    <h1>Vaya...</h1>
    <p>No hemos podido encobtrar lo que buscabas :(</p>

    </React.Fragment>
    
  )

return (
  <div className="App">
    <Search />
    <Loader></Loader>


   
  </div>
)}
  

const mapStateToProps = state =>{
  return{
    data: state.data
  };
};
export default connect(mapStateToProps, null)(search);