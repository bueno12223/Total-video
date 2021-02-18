import React from 'react'
import Navbar from "./header"
import Footer from "./footer"

class layout extends React.Component {
    render(){
        return(
            <React.Fragment>
            <Navbar></Navbar>
            {props.children}
            <Footer></Footer>
        </React.Fragment>

        )
    }
}

export default layout