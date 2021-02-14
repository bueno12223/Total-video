import React from 'react';
import Header from '../components/header';
import Search from "../components/Search";
import Categories from "../components/categories";
import Rail from "../components/Rail"
import RailItem from "../components/RaiItem"
import Footer from "../components/footer"


import "../assets/style/App.scss"
import "../assets/style/components/railItem.scss"

class home extends React.Component{ 
  // 

  constructor(props) {
    super(props);
    this.state = {
    loading: true,
    error: null,
    data: true,
    movies: [],
    myList: {
      id: [],
      movies: {}
    }
  } }


  componentDidMount(){
    
    for(let i = 0; i < 5; i++){
      let ramdomMovie = this.random(30,550)
      this.searchData(ramdomMovie)
    }

    
    
    
  }
  random(min, max){
    let num = Math.floor(Math.random()*(max-min+1))+min;
    return num;
    }

  async searchData(id){
    const key = "0c7a6b113add233831a0d6eec346cd98"
    try{
      for (;this.state.movies.length < 6; id++){
      let data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`) 
      let res = await data.json()
      if(res.success === undefined){
        this.state.movies.push(res)
      }
      
      }
      
      

     
   this.setState({loading: false })
    
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
     {this.state.myList > 0 &&( 
      <React.Fragment>
      <Categories  title="Mi lista"></Categories>
      <Rail>

        <RailItem/>
        
      </Rail>
      </React.Fragment> 

    ) }
    

      <Categories  title="Mas vistas"></Categories>
      <Rail>
          {this.state.movies.map(item =>
            <RailItem key={item.id} {...item} />)}
      
         
           
           
        
       
      </Rail>
      <Categories  title="Para tí"></Categories>
      <Rail>
      {/* {initialState.originals.map(item =>
           <RailItem key={item.id} {...item} />)} */}
           
      
      </Rail>
      <Footer></Footer>

   
  </div>
)}
  }

export default home;