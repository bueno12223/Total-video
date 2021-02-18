import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./pages/home"
import Login from "./pages/login"
// import Layout from "./components/header"

function App() {
    return (
      <BrowserRouter>
      {/* <Layout>
        <Switch>
           */}
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/login" component={Login} />
  
          <Route  component={Home}/> */}
        {/* </Switch>
        </Layout> */}
      </BrowserRouter>
    );
  }
  
  export default App;