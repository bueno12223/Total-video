import React from "react"
import "../assets/style/components/railItem.scss"

const railitem = ({poster_path, id}) => 
(
    <div className='rail__item' id={id}>
                {console.log(poster_path)}
                <img className="rail_cover" src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="hols"/>
                <span><img className="rail__menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAsUlEQVRoge3WsQ3CMBSE4Xsva4RJKOkYxIOwRcQgrMAeyQp0iU2BiGyEQTTIiP9rrMh2dE9ycRIAAD/M8o/t+bI3i0OS+ncXuznKlyifo7rK+nJvies/irWyd5OmlLpwOO5O9xxeTNN0eEmy3i0OeZZigLbDrxk31QFaD/9M+YSkqfXwJo3VAZJ70MOB5sKbheoBAPg6uhBdiC6UoQvRhQD8HboQXYgulKEL0YUAAPjMFVl5ME7qsKxKAAAAAElFTkSuQmCC"/></span>
                
            </div>
) 
export default railitem