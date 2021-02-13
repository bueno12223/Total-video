import React, {children} from "react"


import "../assets/style/components/railItem.scss"
import pause from "../assets/images/pause.png"

const railitem = ({cover, title, year, contentRating, duration}) => (
    <div className="rail__item">
                <img className="rail_cover" src={cover} alt={title}/>
                <p className="disapear">{title}</p>
                <p className="rail__description">{`${year}  ${contentRating}  ${duration}` }</p>
                <span><img src="https://img.icons8.com/flat_round/64/000000/play--v1.png"/></span>
                <span><img className="rail__pause" src={pause} alt=""/></span>
            </div>
)
export default railitem