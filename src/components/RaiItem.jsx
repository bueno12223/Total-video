import React from "react";
import {connect} from 'react-redux';
import {setFavorites} from '../actions';
import "../assets/style/components/railItem.scss";
import add from '../assets/images/estrella.png'

const railitem = (props) => {
    const {poster_path, id} = props;
    const handleSetfavorite = () => {
        props.setFavorites({poster_path, id})
    };
    return(
        <div className='rail__item'>
                    <img className="rail_cover" src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="hols"/>
                    <div className="rail_info">
                    <img src={add} onClick={handleSetfavorite}></img>
                    <img src={add}></img>

                    </div>
                </div>
) }
const mapDispachToProps = {
    setFavorites,

};

export default connect(null, mapDispachToProps)(railitem);