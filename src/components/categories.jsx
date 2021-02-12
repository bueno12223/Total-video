import React from "react"

import "../assets/style/components/categories.scss"

const categories = ({Children}) => (
    <div>

    <p className="rail_title">Lo más visto</p>
       <div className="categories">
               
           {Children}
       </div>
   
    </div>

  
    )

export default categories