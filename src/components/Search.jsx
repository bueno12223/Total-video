import React from "react"
import {Link} from 'react-router-dom'
import "../assets/style/components/search.scss"
const searcher = "¿Que deseas ver hoy?"
const input = "Buscar ..."
import {connect} from "react-redux"
import {putSeachData} from '../actions'

const Search = (props) => {
    let value
        const searchData = async () =>{
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=b89fc45c2067cbd33560270639722eae&query=${value}&language=es`);
            const res = await data.json();
            let total = {...res, searched: true}
            console.log(total);
            props.putSeachData(total);
          }
    return(
        <section className="search">
            <div className="search__titleContainer">
                <h1 className="search_title">{searcher} </h1>
            </div>
            <div className="search__inputContainer">
                <input className="search_input" type="text" placeholder={input} onChange={(e)=>value = e.target.value}  />
                <Link to='/result'><img className="seach__icon" onClick={searchData} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABbElEQVRIia2VsU4CQRRFnxRYiJ02LIWFPX/gZ4DaaaEGkIoGO39LQoyCrVba0GgBaAy9SrLHwrvJSnB2RvY1s5m99515M/tmzRYC2ATaQB+YAF8a+8A5UFr0eAewD7zhjleg9p/kF0CsJLdAHSgDRSASfKD3MdANXXkMzIGzDG1DutirEu15si3O5AsQgGnmmehAAW58kqd8Q/laWcK+hPVAwIF8vSzhRMJyICCSb5wl/JSwGAhYl+/DpSuY2UzPWyEAM9vWOHOJCmb2pOe9QECif3Sq1P4AA9/MwBpwJ18zS1xS+wM0PAEt7z6QoZbqZCdEyecCdHwWlBi7qbtoqO+8oruoAhymtiWJd6AaAqmpbFdMgY6SJ5Bj4NKrl3QmTaAHjNUnY+BK8xvSVVOQJEZAxbsij8UcLanwF6SwImNnydyumV3nUgk/P6TRH2c1AqI8IJEDcr8yIAPykgvAATnJDZCCPADPwKmZ2TdWELCQQJ/4TwAAAABJRU5ErkJggg=="/></Link>
            </div>
        </section>
)};
const mapDispachToProps = {
    putSeachData
  };

export default connect(null, mapDispachToProps)(Search);