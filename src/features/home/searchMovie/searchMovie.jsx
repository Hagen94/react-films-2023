import AppCarrusel from "../../../core/components/app_carrusel/app_carrusel"
import AppButton from "../../../core/components/app_button/app_button"
import HeaderHome from "../../../core/components/app_header/header_home"
import "./searchMovie.css"
import { useEffect, useState } from "react"
import { mtdb } from "../views/services/datasources/remote/tmdb/tmdb_api"
import { tdmbMoviesTvAdapter } from "../views/services/adapters/tmdb_adapters"
import useSWR from "swr"
import App_trailer from "../../../core/components/app_trailer/app_trailer"



const SearchMovie = () => {
  const [searchKey, setSearchKey] = useState("")
  const [movie, setMovie] = useState({ title: "Loading Movies" })
  const [trailer, setTrailer] = useState(null)
  const [playing, setPlaying] = useState(false);
  
  
  const buscarMovie = async () => {
    const type =  searchKey? "search": "discover"
    try { 
      const { data } = await mtdb.get(`/${type}/movie`, {
        params: {
          query: searchKey,
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mzc3OWJhNjNlYWJhMWU0NmM0OGYwYzJmNzgxZmI0NSIsInN1YiI6IjY1NTNhODQyYWM0MTYxMDBjNjNiMTM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mNAi-xUSliBKZq2gsk226KZ6kWaz5QVSrO9FxJFsXB4',
        },
      });
      if (data.results.length) {
        await infoMovie(data.results[0].id);
      }
     
      setMovie(data.results[0]);
      return tdmbMoviesTvAdapter(data);
    } catch (error) {
      console.error('Error fetching movie data:', error);
      return null;
    }
  }; 
  
  const searchMovies = (e)=>{
  e.preventDefault()
  buscarMovie
  }
  
  useEffect(()=>{
    buscarMovie
  },[])
  
  const {data} =useSWR('getMovie', buscarMovie);
  
  //funciones para informacion de pelicula y el reproductor de video
  
  const infoMovie = async(id)=>{
  const {data} = await mtdb.get(`/movie/${id}`,{
    params: {
      append_to_response: 'videos',
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mzc3OWJhNjNlYWJhMWU0NmM0OGYwYzJmNzgxZmI0NSIsInN1YiI6IjY1NTNhODQyYWM0MTYxMDBjNjNiMTM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mNAi-xUSliBKZq2gsk226KZ6kWaz5QVSrO9FxJFsXB4',
    },
  })
  
  if(data.videos && data.videos.results ){
    const trailer = data.videos.results.find((video) => video.name === 'Official Trailer');
   setTrailer(trailer? trailer : data.videos.results[0])
  }
  setMovie(data)
  }
  
  //funcion para pasar el id al seleccionar
  
  const selectMovie = async (movie)=>{
    console.log(movie)
    infoMovie(movie.id)
  
    setMovie(movie)
    window.scrollTo(0, 0);
  }



  return (
    <div>
    <HeaderHome></HeaderHome>
      <form  onSubmit={searchMovies} className="formSearchMovie">
        <input type='text' placeholder='Titulos, personas, generos'  onChange={(e)=>setSearchKey(e.target.value)} />
        <AppButton  type="submit" > 
        Buscar 
        </AppButton>
      </form>
      <App_trailer movie={movie} trailer={trailer} playing={playing} setPlaying={setPlaying}></App_trailer>
      <AppCarrusel data={data} selectMovie={selectMovie} ></AppCarrusel>
    </div>
  )
}


export default SearchMovie
