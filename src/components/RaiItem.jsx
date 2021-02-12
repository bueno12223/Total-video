import React, {children} from "react"

import "../assets/style/components/railItem.scss"

const railitem = () => (
    <div className="rail__item rail1 " >
                <p className="disapear">Una entretenida aventura </p>
                <span><img src="https://img.icons8.com/flat_round/64/000000/play--v1.png"/></span>
                <span><img className="rail__pause" src="./pause.png" alt=""/></span>
            </div>
)
export default railitem