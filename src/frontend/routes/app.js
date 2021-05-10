import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import Player from '../pages/player';
import Layout from '../components/layout';
import NotFoud from '../components/notFoud';
import '../assets/style/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/player/:id' component={Player} />
          <Route component={NotFoud} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
