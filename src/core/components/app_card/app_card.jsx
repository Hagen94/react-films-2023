import Body from "./components/body"
import Footer from "./components/footer"
import Header from "./components/header"
 import styles from "./card_style.module.css"
/**
 * las importaciones podrian ir en un archivo de barril
 * tambien podes hacer un alias para acortar las importaciones
 */

const image = {
  show:false,
  url:"", 
  alt:""
}
const defaultConfig ={
  image,
}

const AppCard = ({children, config = defaultConfig, ...props}) => {
  return (
    <article className={styles.card} {...props}>
    
    {config.image.show && (
      <img 
      src={config.image.url} 
       alt={config.image.alt} 
    />
    )}
    {children}
    </article>
  )
}

export default AppCard

//le agrego a AppCard como propiedades los componentes ->compont components
AppCard.Header = Header
AppCard.Body = Body
AppCard.Footer = Footer