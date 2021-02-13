import React, {children} from "react"


import "../assets/style/components/railItem.scss"
import pause from "../assets/images/pause.png"

const railitem = ({overview, poster_path, runtime}) => 
(
    <div className="rail__item">
                <img className="rail_cover" src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt=""/>
                
                <span><img src="https://img.icons8.com/flat_round/64/000000/play--v1.png"/></span>
                
            </div>
)
export default railitem