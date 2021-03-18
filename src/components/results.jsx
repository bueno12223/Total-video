import React from "react"
import {Link} from 'react-router-dom'

import "../assets/style/components/categories.scss"

const results = ({Children, title}) => (
    <div>

    <p className="rail_title">{title} Regresar </p>
       <div className="categories">
               
           {Children}
       </div>
   
    </div>

  
    )

export default results