import React, {useEffect, useState} from 'react';
import Header from '../components/header';
import Search from "../components/Search";
import Categories from "../components/categories";
import Rail from "../components/Rail"
import RailItem from "../components/RaiItem"
import Footer from "../components/footer"
import useGetMovies from "../hooks/useGetMovies"

import "../assets/style/App.scss"
import "../assets/style/components/railItem.scss"


const App = () => { 
  const movies = useGetMovies(500)

return (
  <div className="App">
    <Header />
    <Search/>
    {/* {initialState.mylist.length > 0 && ( */}
      <React.Fragment>
      <Categories  title="Mi lista"></Categories>
      <Rail>
        <RailItem/>
        
      </Rail>
      </React.Fragment>

    )
    {console.log(movies)}
    

    

      <Categories  title="Mas vistas"></Categories>
      <Rail>
        {/* {useGetMovies.trends.map(item =>
           <RailItem key={item.id} {...item} />)} */}
           <RailItem></RailItem>
        
       
      </Rail>

      <Categories  title="Para tí"></Categories>
      <Rail>
      {/* {initialState.originals.map(item =>
           <RailItem key={item.id} {...item} />)} */}
           <RailItem></RailItem>
      
      </Rail>
      <Footer></Footer>

   
  </div>
);
  }

export default App;