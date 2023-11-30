
import AppLink from '../app_li/app_li'
import AppUl from '../app_li/app_ul.jsx/app.ul'

const Navbar = ({...props}) => {
  return (
    <nav {...props}>
        <AppUl style={{ display:"flex", flexDirection:"row", gap:"2rem", alignItems:"center", }}>
            <AppLink href="#" style={{color:"white",  fontSize:"1.4em", lineHeight:"16.8px", textAlight:"left", }}>inicio</AppLink>
            <AppLink href="#" style={{color:"white",  fontSize:"1.4em", lineHeight:"16.8px", textAlight:"left",}}>series</AppLink>
            <AppLink  style={{color:"white",  fontSize:"1.4em", lineHeight:"16.8px", textAlight:"left",}}>Novedades populares</AppLink>
            <AppLink href="#" style={{color:"white",  fontSize:"1.4em", lineHeight:"16.8px", textAlight:"left",}}>Peliculas</AppLink>
            <AppLink href="#" style={{color:"white",  fontSize:"1.4em", lineHeight:"16.8px", textAlight:"left",}}>Explora por idiomas   </AppLink>
        </AppUl>
    </nav>
  )
}

export default Navbar