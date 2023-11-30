import axios from "axios";

//ACA CENTRALIZAMOS LA CONGIGURACION DE LA API
export const mtdb = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        apy_key: import.meta.env.VITE_API_API_KEY,
       
      
    },
   
})

//objeto con endpoints
export const tmdb_paths = {
    movies: {
      popular: "/movie/popular",
      top_rated: "/movie/top_rated",
      upcoming: "/movie/upcoming",
      id: "find/external_id?external_source=",
      
      
     
    },
    tv: {
      popular: "/tv/popular",
      top_rated: "/tv/top_rated",
      airing_today: "/tv/airing_today",
      video:"tv/{series_id}/videos"
    },
    images: {
      poster: {
        sizes: {
          w92: "/w92",
          w154: "/w154",
          w185: "/w185",
          w342: "/w342",
          w500: "/w500",
          w780: "/w780",
          original: "/original",
        },
      url: "https://image.tmdb.org/t/p",
      },
      backdrop: {
        sizes: {
          w300: "/w300",
          w780: "/w780",
          w1280: "/w1280",
          original: "/original",
        },
        url: "https://image.tmdb.org/t/p",
      },
    },
  };

//paquete para trailers

/**
 * react-youtube
 *elprofesor nos va a avisar bien
 */