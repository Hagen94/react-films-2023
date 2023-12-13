
import Anchor from '../app_logo_netflix.jsx/logo_netflix'
import Navbar from '../navbar/navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMagnifyingGlass,  } from "@fortawesome/free-solid-svg-icons";
import AppLink from '../app_li/app_li';
import BasicMenu from '../app_boton_menu/app_boton_menu';
import styles from './header.style.module.css';
import AlignItemsList from '../app_estrenos/app_estrenos';


const HeaderHome = ({data}) => { 

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
          <AppLink style={{position:"relative"}} to={"/searchMovie"}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size='2x' className={styles.lupa}  style={{color:"white"}}/>
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