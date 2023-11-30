import { tdmbMoviesTvAdapter } from "./adapters/tmdb_adapters"
import { mtdb, tmdb_paths } from "./datasources/remote/tmdb/tmdb_api"



export const getPopularMovies = async () =>{
                    //baseurl       //endpoint
 const {data} = await mtdb.get(tmdb_paths.movies.popular,options)

 return tdmbMoviesTvAdapter(data) //le pasamos los datos al adaptador
}
export const getPopularMovie = async () =>{

const {data} = await mtdb.get(tmdb_paths.movies.popular,options)

return data //le pasamos los datos al adaptador
}

export const getTopRatedMovies = async () => {
    const { data } = await mtdb.get(tmdb_paths.movies.top_rated, options);
    
    return tdmbMoviesTvAdapter(data);
  };

  
  
  export const getUpcomingMovies = async () => {
    const { data } = await mtdb.get(tmdb_paths.movies.upcoming, options);
  
    return tdmbMoviesTvAdapter(data);
  };

  export const getMovieID = async () => {
    const { data } = await mtdb.get(tmdb_paths.movies.id + 1075794, options);
  console.log(data)
    return tdmbMoviesTvAdapter(data);
  };

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mzc3OWJhNjNlYWJhMWU0NmM0OGYwYzJmNzgxZmI0NSIsInN1YiI6IjY1NTNhODQyYWM0MTYxMDBjNjNiMTM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mNAi-xUSliBKZq2gsk226KZ6kWaz5QVSrO9FxJFsXB4'
  }
}