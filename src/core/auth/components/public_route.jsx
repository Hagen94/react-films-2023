import { Navigate } from "react-router-dom";
import { UseAuth } from "../hook/use_auth";

const Public_route = ({children}) => {
  const {isLoggedIn}= UseAuth();

  //si estoy logged voy al home

  if(isLoggedIn) return <Navigate to={"/"}/>;
  //si no estoy logged voy al  login
  return (
    children
  )
}

export default Public_route