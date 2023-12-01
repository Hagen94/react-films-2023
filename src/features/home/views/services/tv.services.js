

import { tdmbMoviesTvAdapter } from "./adapters/tmdb_adapters"
import { mtdb, tmdb_paths } from "./datasources/remote/tmdb/tmdb_api"



export const getPopularTv = async () =>{
 const {data} = await mtdb.get(tmdb_paths.tv.popular,options)
 return tdmbMoviesTvAdapter(data) //le pasamos los datos al adaptador
}

export const getTopRatedTv = async () => {
    const { data } = await mtdb.get(tmdb_paths.tv.top_rated, options);
    return tdmbMoviesTvAdapter(data);
  };
  
  export const getUpcomingTv = async () => {
    const { data } = await mtdb.get(tmdb_paths.tv.airing_today, options);
    return tdmbMoviesTvAdapter(data);
  };

 

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mzc3OWJhNjNlYWJhMWU0NmM0OGYwYzJmNzgxZmI0NSIsInN1YiI6IjY1NTNhODQyYWM0MTYxMDBjNjNiMTM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mNAi-xUSliBKZq2gsk226KZ6kWaz5QVSrO9FxJFsXB4'
  }
}