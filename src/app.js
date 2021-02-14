import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./pages/home"
import Login from "./pages/login"
import NavBar from "./components/header"

function app() {
    return(
        <BrowserRouter>
        <NavBar>
            <Switch>

                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
            </Switch>
        </NavBar>

        </BrowserRouter>
    )
}
export default app