import { useContext } from "react";
import { AuthContext } from "../context/auth_context";


export const UseAuth = () =>{
  const {isLoggedIn, logIn, logOut}= useContext(AuthContext)
    return {
        isLoggedIn, logIn, logOut
    };
}

