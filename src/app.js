import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./pages/home"
import Login from "./pages/login"
import Layout from "./components/layout"
// import Layout from "./components/header"

function App() {
    return (
      <BrowserRouter>
    
           <Switch>
           <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
           </Switch>

      </BrowserRouter>
    );
  }
  
  export default App;