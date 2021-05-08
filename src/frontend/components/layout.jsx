import React from 'react'
import Navbar from "./header"
import Footer from "./footer"


function Layout ({children}) {
        return (
            <div className="App">
                <Navbar></Navbar>
                {children}
                <Footer></Footer>

            </div>
            );
    
}
export default Layout