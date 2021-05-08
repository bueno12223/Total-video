import React,{useEffect, useState} from 'react';
import {Link }from 'react-router-dom';
import {connect} from "react-redux";

import '../assets/style/player.scss'

const player = (props) => {
    const [data, setData ] = useState([])
    const params = props.match.params;
    useEffect( () => {
        getTrailer(params);
    }, props)
    const getTrailer = async(params) =>{
            const data = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?${props.query.key}&${props.query.language}`);                    
        let res = await data.json();
        if(res.results){
            setData([res.results[0]])
        }
        
    };
    
    return(
        <React.Fragment>
            <div className="player__videoContainer">
            {data[0] &&(
                data.map(e =>(
                    <iframe className='player__video'
                src={`https://www.youtube.com/embed/${e.key}?autoplay=1&mute=1`}>
            </iframe>
            )))}
            

            </div>

           
             
        <Link to='/'><button className='player__button'>Regresar</button></Link>
        

        </React.Fragment>
       
    )
}

const mapStateToProps = state =>{
    return{
      query: state.query
    } }
export default  connect(mapStateToProps,null)(player)