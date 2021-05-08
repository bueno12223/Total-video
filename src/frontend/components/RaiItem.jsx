import React from "react";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {setFavorites, deleteFavorites} from '../actions';

import add from '../assets/images/estrella.png'
import play from '../assets/images/play.png';

import "../assets/style/components/railItem.scss";

const railitem = (props) => {
    const {poster_path, id,overview,title} = props;
    const favorites = true
    const handleDeletefavorite = () => {
        props.deleteFavorites(id)
    }
    const handleSetfavorite = () => {
        props.setFavorites({poster_path, id,overview,title, favorites})
    };
    let image = add
    let action = handleSetfavorite
    if(props.favorites == true){
        image = "https://img.icons8.com/material-rounded/24/26e07f/delete-forever.png";
        action = handleDeletefavorite
    }
    return(
        <div className='rail__item' id={id}>
                    {poster_path == undefined &&(<div></div>)
                    }
                    <img className="rail_cover" src={`https://image.tmdb.org/t/p/w342${poster_path}`} />
                    <div className="rail_info">
                    <p>{overview}</p>
                    <h4>{title}</h4>
                    <img src={image} onClick={action} className="rail__itemAction"/> 
                    <Link to={`/player/${id}`} ><img src={play} className="rail__itemPlay"></img></Link>  
                    

                    </div>
                </div>
) }
const mapDispachToProps = {
    setFavorites,
    deleteFavorites

};

export default connect(null, mapDispachToProps)(railitem);