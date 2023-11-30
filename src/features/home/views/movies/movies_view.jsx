
import useSWR from 'swr';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/movie.services';
import HeaderHome from '../../../../core/components/app_header/header_home';
import AppCarrusel from '../../../../core/components/app_carrusel/app_carrusel';

const MoviesView = () => {
 
    const {
        data:popularMovies,
        error: errorPopularMovies,
        isLoading: isLoadingPopularMovies} = useSWR('getPopularMovies', getPopularMovies);
      
      
    const {data:topRatedMovies,
          error: errorTopRatedMovies,
          isLoading: isLoadingTopRatedMovies} = useSWR('getTopRatedMovies',  getTopRatedMovies);
        
    const {data:upComingMovies,
            error: errorUpcomingMovies,
            isLoading: isLoadingUpcomingMovies} = useSWR('getUpcomingMovies', getUpcomingMovies);
   
  return (
    <div>
    <HeaderHome  data={popularMovies}/>
        <AppCarrusel data={popularMovies} title={"Peliculas mejor puntuadas"}></AppCarrusel>
        <AppCarrusel data={topRatedMovies} title={"Peliculas mejor calificadas"}></AppCarrusel>
        <AppCarrusel data={upComingMovies} title={"Peliculas proximamente"}></AppCarrusel>
       
      
    </div>
  )
}

export default MoviesView
