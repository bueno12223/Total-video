import React from "react"
import {Link} from "react-router-dom"

import "../assets/style/footer.scss"

const footer = () => (
    <footer className="footer">
        <Link to='/'><a href="/">Términos de uso</a></Link>
        <Link to='/'><a href="/">Privacidad</a></Link>
        <Link to='/'><a href="/">Ayuda</a></Link>
        </footer>
)
export default footer