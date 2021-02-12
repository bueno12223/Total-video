import React from 'react';
import Header from '../components/header';
import Search from "../components/Search";
import Categories from "../components/categories";
import Rail from "../components/Rail"
import RailItem from "../components/RaiItem"

import "../assets/style/App.scss"
import "../assets/style/components/railItem.scss"


const App = () => (
  <div className="App">
    <Header />
    <Search/>

    <Categories></Categories>
      <Rail>
        <RailItem className="rail__item"/>
        <RailItem/>
        <RailItem />
        <RailItem />
        <RailItem />
      </Rail>

   
  </div>
);

export default App;