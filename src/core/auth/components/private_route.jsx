import { UseAuth } from "../hook/use_auth"
import {Navigate} from "react-router-dom"


const Private_route = ({children}) => {
const {isLoggedIn}= UseAuth();
//si estoy logged voy al children home
if(isLoggedIn) return children;
//if I'm not logged in, I'm going to login
  return (
    <Navigate to={"/login"}/>
  )
}

export default Private_route