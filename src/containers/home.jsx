import React from 'react';
import Header from '../components/header';
import Search from "../components/Search";
import Categories from "../components/categories";
import Rail from "../components/Rail"
import RailItem from "../components/RaiItem"
import Footer from "../components/footer"
import useGetMovies from "../hooks/useGetMovies"

import "../assets/style/App.scss"
import "../assets/style/components/railItem.scss"

class home extends React.Component{ 

  constructor(props) {
    super(props);
    this.state = {
    loading: true,
    error: null,
    movies: {
      // id: null,
      // name: '',
      // cover: '',
      // overview: '',
      // genres: '',
    },
  } }


  componentDidMount(){
    this.searchData(400)
  }
  async searchData(id){
    const key = "0c7a6b113add233831a0d6eec346cd98"
    try{
 
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`) 
    const res = await data.json()
    this.setState({loading: false, movies:res})
    
    }catch(error){
      this.setState({loading: false, error: error})
      console.error(error)
    } 
  }
  
render(){ 
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
    

    

      <Categories  title="Mas vistas"></Categories>
      <Rail>
        {/* {useGetMovies.trends.map(item =>
           <RailItem key={item.id} {...item} />)} */}
           <RailItem></RailItem>
           {console.log(this.state)}
        
       
      </Rail>
      <Categories  title="Para tí"></Categories>
      <Rail>
      {/* {initialState.originals.map(item =>
           <RailItem key={item.id} {...item} />)} */}
           <RailItem></RailItem>
      
      </Rail>
      <Footer></Footer>

   
  </div>
)}
  }

export default home;