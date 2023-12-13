
import AppSwipperSlide from '../app_swiper/components/app_swipper_slide';
import { MyComponent } from '../app_swiper/app_swiper';
import AppTitle from '../app_title/app_title';
import AppCard from '../app_card/app_card';
import styles from "./carrusel.style.module.css"
const AppCarrusel = ({data, title, selectMovie }) => {
  
  const enviarMovie= (elemento)=>{
 selectMovie(elemento)
 
  }
  
  return (
    <div className={styles.container}>
        <AppTitle className={styles.title}>{title}</AppTitle>
        <MyComponent className={styles.swiper}>
          {data?.map((element) => {
            
            return (
            <AppSwipperSlide key={element.id} classname={styles.card}  onClick={() => enviarMovie(element)}>
        <AppCard 
        
        config={{
          image:{
            show:true,
            url: `${element.poster}`, 
            alt:"imagen de una pelicula"
            }}
          }>
          <AppCard.Header>{element.title}</AppCard.Header>
        </AppCard>
     
            </AppSwipperSlide>);
          })}

        </MyComponent>
    </div>
  )
}

export default AppCarrusel