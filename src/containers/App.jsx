import React from 'react';
import Header from '../components/header';
import Search from "../components/Search";
import Categories from "../components/categories";
import Rail from "../components/Rail"
import RailItem from "../components/RaiItem"
import Footer from "../components/footer"

import "../assets/style/App.scss"
import "../assets/style/components/railItem.scss"


const App = () => (
  <div className="App">
    <Header />
    <Search/>

    <Categories  title="Mi lista"></Categories>
      <Rail>
        <RailItem id="uno" />
        <RailItem id="b" />
        <RailItem id="c" />
        <RailItem id="d" />
        <RailItem id="e" />
      </Rail>

      <Categories  title="Mas vistas"></Categories>
      <Rail>
        <RailItem id="d" />
        <RailItem id="uno" />
        <RailItem id="e" />
        <RailItem id="uno" />
        <RailItem id="b" />
      </Rail>

      <Categories  title="Para tí"></Categories>
      <Rail>
        <RailItem id="c"/>
        <RailItem id="uno" />
        <RailItem id="b" />
        <RailItem id="d" />
        <RailItem id="e" />
      </Rail>
      <Footer></Footer>

   
  </div>
);

export default App;