
import styles from "./form_login.module.css"
const Form_login = ({submit}) => {

   

  return (
    
        <form onSubmit={ submit} className={styles.form}> 
            <div className={styles.usuarioContraseña}>
                <label className={styles.label}>Email o número de teléfono</label>
                <input type='email'  name='email' ></input>
            </div>
            <div className={styles.usuarioContraseña}>
                <label className={styles.label}>Contraseña</label> 
                <input type='password'  name='password'></input>
            </div>
        
            <div className={styles.inicioSesionBoton}>
                <button type='submit'>Iniciar sesion</button>
            </div>
            <div className={styles.recordarDatos}>
                <div>
                    <input type='checkbox' className={styles.checked} ></input>
                    <label> 
                        <span>Recuérdame</span>
                    </label>
                </div>
                <a href='#'>¿Necesitas ayuda?</a>
            </div>
        </form>
    
)
}

export default Form_login