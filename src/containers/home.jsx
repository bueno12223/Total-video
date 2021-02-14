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
    movies: [],
    popular: [],
    myList: {
      id: [],
      movies: {}
    }
  } }


  componentDidMount(){ 
    this.getRamdomMovies()
  }
  random(min, max){
    let num = Math.floor(Math.random()*(max-min+1))+min;
    return num;
    }

  async getRamdomMovies(loop = 10){
    try{
      for(let i = 0;i < loop;){
        let id = this.random(50,550)
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b89fc45c2067cbd33560270639722eae`)                       
      let res = await data.json()
      
      if(res.success === undefined){
        i++
        this.state.movies.push(res)
        

    }
    
      
      }
      const data2 = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b89fc45c2067cbd33560270639722eae`)                       
      let res2 = await data2.json()
      this.setState({loading: false, popular: res2 })
      }catch(e){
        this.setState({loading: false, error: e })

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
      <Categories  title="Aleatorio"></Categories>
      <Rail>
          {this.state.movies.map(item =>
            <RailItem key={item.id} {...item} />)}
      
      </Rail>
      <Footer></Footer>

   
  </div>
)}
  }

export default home;