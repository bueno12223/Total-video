import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./pages/home"
import Login from "./pages/login"
import Layout from "./components/layout"
import NotFoud from "./components/notFoud"
import Search from './pages/search'


function App() {
    return (
      <BrowserRouter>
      <Layout>
      <Switch>
           <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/result" component={Search} />
          <Route component={NotFoud} />

           </Switch>

      </Layout>
    
           

      </BrowserRouter>
    );
  }
  
  export default App;