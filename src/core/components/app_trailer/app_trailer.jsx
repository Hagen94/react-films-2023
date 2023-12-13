import YouTube from 'react-youtube'
import AppButton from '../app_button/app_button'

const App_trailer = ({movie, trailer, playing, setPlaying} ) => {

    const IMAGE_PATH = "https://image.tmdb.org/t/p/original"; 
  
  return (
    <div className="containerTrailer" >
        
          {movie ? (
            <div
              className="viewtrailer"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName={"youtube-container amru"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <AppButton onClick={()=>  setPlaying(false)} className="boton">Cerrar</AppButton>
                </>
              ) : (
                <div className="container">
                  <div >
                    {trailer ? (
                      <AppButton 
                      className="boton"
                      onClick={() => setPlaying(true)}
                      type="button">
                       Play Trailer
                       </AppButton>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <h1 className="text-white">{movie.title}</h1>
                    <p className="text-white">{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        
      </div>
  )
}

export default App_trailer

