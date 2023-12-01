
import AppCarrusel from "../../../core/components/app_carrusel/app_carrusel";
import HeaderHome from "../../../core/components/app_header/header_home";
import styles from './home_style.module.css';
import useSWR from 'swr';
import {  getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "./services/movie.services";
import { getPopularTv, getTopRatedTv,  getUpcomingTv } from "./services/tv.services";




export const Home_views = () => {

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
/*--------------TV---------------------- */
const {data:popularTv,
error: errorPopularTv,
isLoading: isLoadingPopularTv} = useSWR('getPopularTv', getPopularTv);
const {data:topRatedTv,
error: errorTopRatedTv,
isLoading: isLoadingTopRatedTv} = useSWR('getTopRatedTv',  getTopRatedTv);
        
const {data:upComingTv,
error: errorUpcomingTv,
isLoading: isLoadingUpcomingTv} = useSWR('getUpcomingTv', getUpcomingTv);


  return (
   
      <div className={styles.contenedorHome}>
        <HeaderHome  data={popularMovies}  />
        <AppCarrusel data={popularMovies} title={"Peliculas mejor puntuadas"}></AppCarrusel>
        <AppCarrusel data={topRatedMovies} title={"Peliculas mejor calificadas"}></AppCarrusel>
        <AppCarrusel data={upComingMovies} title={"Peliculas proximamente"}></AppCarrusel>
        <AppCarrusel data={popularTv} title={"Tv mejor puntuadas"}></AppCarrusel>
        <AppCarrusel data={topRatedTv} title={"Tv mejor calificadas"}></AppCarrusel>
        <AppCarrusel data={upComingTv} title={"Tv proximamente"}></AppCarrusel>
        
      </div>

  );
};
