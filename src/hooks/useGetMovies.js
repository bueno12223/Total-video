import {useState, useEffect} from "react"

const useGetMovies = (id) => {
    const [videos, setVideos] = useState({ loding: true, movies: [] })
  useEffect(async () => {
    const key = "0c7a6b113add233831a0d6eec346cd98"
    try{
      const results = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
    const data = await results.json
    setVideos({loading: false, movies: data})
    }catch(error){
      setVideos({loading: false, error: error})
    }
    
  }, [] )
  return videos
}
export default useGetMovies

