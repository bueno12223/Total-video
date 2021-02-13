import React, {useEffect, useState} from 'react';
import Header from '../components/header';
import Search from "../components/Search";
import Categories from "../components/categories";
import Rail from "../components/Rail"
import RailItem from "../components/RaiItem"
import Footer from "../components/footer"
import useInitialState from "../hooks/useInitialState"

const API =  "http://localhost:3000/initialState"

import "../assets/style/App.scss"
import "../assets/style/components/railItem.scss"


const App = () => { 
  const initialState = useInitialState(API)

return (
  <div className="App">
    <Header />
    <Search/>
    {initialState.mylist.length > 0 && (
      <React.Fragment>
      <Categories  title="Mi lista"></Categories>
      <Rail>
        <RailItem/>
        
      </Rail>
      </React.Fragment>

    )}
    

    

      <Categories  title="Mas vistas"></Categories>
      <Rail>
        {initialState.trends.map(item =>
           <RailItem key={item.id} {...item} />)}
        
       
      </Rail>

      <Categories  title="Para tí"></Categories>
      <Rail>
      {initialState.originals.map(item =>
           <RailItem key={item.id} {...item} />)}
      
      </Rail>
      <Footer></Footer>

   
  </div>
);
  }

export default App;