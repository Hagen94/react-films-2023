import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context"
import { authApi } from "../../datasources/remote/auth/auth_api";


 export const AUTH_KEY = "isLoggedIn"
export const AuthProvider = ({children})=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    
    //localstorange
    const saveLoginState = (state) => localStorage.setItem(AUTH_KEY, state)
    
    const getLoginState = () => localStorage.getItem(AUTH_KEY)

    const removeLoginState = () => localStorage.removeItem(AUTH_KEY)

useEffect(() => {
const initAuht = async ()=>{
    const logginState = getLoginState()
    if(!logginState) return;

    setIsLoggedIn(logginState)
}    
initAuht()
}, []);

    //son funciones que le pide datos al backend
    const logIn = async (email, password)=>{
    //enviar al backend  vamos a instalar axios para la comunicacion npm i axios
   //const response = await authApi.post("/login",{email, password})//solo agrego la parte final del endpoint porque la baseURL ya esta config con axios
        setIsLoggedIn(true)
        saveLoginState(true)
    }
    
    const logOut = async()=>{ 
        setIsLoggedIn(false)
        removeLoginState()
    }
    
//interceptor para response y request
useEffect( () => {
//esto ocurre antes de enviar la solicitud al servidor
    authApi.interceptors.request.use(
        (config) => {
            //aca yo puedo agregar cabeceras content-type etc antes de enviar al servidor
            //Nico usa los console.log() aca para no tener que ponerlos en cada peticion, cada ves que pasa algo en la peticion ya tenes el console.log
            return config},
        (error) => Promise.reject(error)
    )
//esto ocurre despues de recibir la solicitud del servidor
    authApi.interceptors.response.use(
        (response) =>{
            console.log("ENDPOINT:", response.config.baseURL)
            return response
        }, 
        //Nico usa los console.log() aca para no tener que ponerlos en cada peticion, cada ves que pasa algo en la peticion ya tenes el console.log
        async (error) =>  {
            if(error.response.status === 401 ) await logOut(); // se cierra la sesion

            return Promise.reject(error) //se rechaza la peticion

        }
    )
}, []);




    return (
       <AuthContext.Provider value={{isLoggedIn, logIn, logOut}}>
        {children}
       </AuthContext.Provider>
    )
}