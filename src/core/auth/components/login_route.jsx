import { Navigate } from "react-router-dom";
import { UseAuth } from "../hook/use_auth";

const Public_route = ({children, to, condition}) => {
  //const { condition }= UseAuth();

  //si estoy logged voy al home

  if(condition) return <Navigate to={to}/>;
  //si no estoy logged voy al  login
  return (
    children
  )
}

export default Public_route