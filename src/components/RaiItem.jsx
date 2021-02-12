import React, {children} from "react"


import "../assets/style/components/railItem.scss"
import pause from "../assets/images/pause.png"

const railitem = ({id}) => (
    <div className="rail__item rail1 " id={id} >
                <p className="disapear">Una entretenida aventura </p>
                <span><img src="https://img.icons8.com/flat_round/64/000000/play--v1.png"/></span>
                <span><img className="rail__pause" src={pause} alt=""/></span>
            </div>
)
export default railitem