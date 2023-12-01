import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context"
import {mtdb } from "../../../features/home/views/services/datasources/remote/tmdb/tmdb_api";

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

    const logIn = async ()=>{
   
        setIsLoggedIn(true)
        saveLoginState(true)
    }
    
    const logOut = async()=>{ 
        setIsLoggedIn(false)
        removeLoginState()
    }
    

useEffect( () => {

    mtdb.interceptors.request.use(
        (config) => {
            return config},
        (error) => Promise.reject(error)
    )

    mtdb.interceptors.response.use(
        (response) =>{
            console.log("ENDPOINT:", response.config.baseURL)
            return response
        }, 
       
        async (error) =>  {
            if(error.response.status === 401 ) await logOut(); 
            return Promise.reject(error) 

        }
    )
}, []);




    return (
       <AuthContext.Provider value={{isLoggedIn, logIn, logOut}}>
        {children}
       </AuthContext.Provider>
    )
}