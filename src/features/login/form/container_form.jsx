import  { useState } from 'react'
import styles from "./container_form.module.css"
import Form_login from './form_login'
import { UseAuth } from '../../../core/auth/hook/use_auth'
const Container_form = () => {
    
    const {logIn}= UseAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    const [spanInfo, setSpanInfo] =useState(false)
    const info = ()=>{
        setSpanInfo(!spanInfo)
      }

//interceptor
      const handleSubmit = async (e)=>{
        e.preventDefault()
  
        setIsLoading(true)
      
        try {
         
        const form = e.target;
        const formData = new FormData(form) 
        const {email, password} = Object.fromEntries(formData) 
        form.reset()
        await logIn(email, password) 
      
        
        } catch (error) {
          setError(error.response.data.msg)
        }finally{
          
          setIsLoading(false)
        }
      }
  
  return (
    <>
        <section className={styles.formLogin}> 
            <h1>Inicia sesión</h1>
        <Form_login submit={handleSubmit}></Form_login>
        <div className={styles.suscription}>
            <div className={styles.suscribite}>
                ¿Primera vez en Netflix? 
                <a  href="/">Suscríbete ahora</a>.
            </div>
            <div>
                <p>
                Esta página está protegida por Google reCAPTCHA <br/>
                para comprobar que no eres un robot. <button onClick={info}>Más info.</button>
                </p>
                <div>
                    <span style={{display: spanInfo? "block":"none"}} >
                    La información recopilada por Google reCAPTCHA <br/>
                    está sujeta a la <a className={styles.politicaCondiciones}>Política de privacidad</a> y a las<br/>
                    <a className={styles.politicaCondiciones}>Condiciones del servicio</a> de Google, y se utiliza para <br/>
                    proporcionar, mantener y mejorar el servicio de<br/>
                    reCAPTCHA, así como para fines generales de<br/>
                    seguridad (Google no la utiliza para personalizar<br/>
                    publicidad).
                    </span>
                </div> 
            </div>
        </div>
    </section>
    </>
  )
}

export default Container_form