import React from "react"

import "../assets/style/components/categories.scss"

const categories = ({Children, title}) => (
    <div>

    <p className="rail_title">{title}</p>
       <div className="categories">
               
           {Children}
       </div>
   
    </div>

  
    )

export default categories