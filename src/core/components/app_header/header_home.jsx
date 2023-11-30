
import Anchor from '../app_logo_netflix.jsx/logo_netflix'
import Navbar from '../navbar/navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMagnifyingGlass,  } from "@fortawesome/free-solid-svg-icons";
import AppLink from '../app_li/app_li';
import BasicMenu from '../app_boton_menu/app_boton_menu';
import styles from './header.style.module.css';
import AlignItemsList from '../app_estrenos/app_estrenos';


const HeaderHome = ({data, buscar}) => {

  const arreglo = buscar
  /*Tomamos el valor del input */
  

 

   const handleFind = (e) => {
    /*const busqueda = new RegExp(e.target.value, 'i') */

/*
    arreglo.map((element) => {
      element.map((item)=>{
        if(busqueda.test(item.title)){
           const peliculas = item
          for(const [key, value] of Object.entries(peliculas)){
            console.log(`${key}: ${value}`);
            window.location.href = urlCompleta
          }
        }
      })
    })
      */
     
    }




  return (
    <header className={styles.header} >

        <section className={styles.primerSection}>
        <div className={styles.contenedorLogo}>
          <Anchor className={styles.logo}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' />
          </Anchor>
        </div>
          <Navbar className={styles.navbar}/>
        </section>
        <section className={styles.segundaSection}>
        
          <AppLink style={{position:"relative"}}>
              <input type='text' placeholder='Titulos, personas, generos' className={styles.inputLupa} onChange={handleFind}  />
              <FontAwesomeIcon icon={faMagnifyingGlass} size='2x' className={styles.lupa} style={{color: "#f7f7f7"}} />
          </AppLink>
       
        <AppLink>
          <AlignItemsList data={data}/>
        </AppLink>
        <BasicMenu/>
        </section>
      
    </header>
  )
}

export default HeaderHome