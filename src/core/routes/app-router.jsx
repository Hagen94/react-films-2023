import { createBrowserRouter } from "react-router-dom";
import Private_route from "../auth/components/private_route";
import Public_route from "../auth/components/public_route";
import { Home_views } from "../../features/home/views/Home_views";
import Login_views from "../../features/login/views/Login_views"
import MoviesView from "../../features/home/views/movies/movies_view";



export const appRouter = createBrowserRouter([
{path: "/",
    element:<Private_route>
                <Home_views/>
            </Private_route>
           
},
{path:"/login",
element:
<Public_route ><Login_views/></Public_route>,
    
},{
path: "/search",
element: <MoviesView></MoviesView>
},
{
    //ruteo para cuando no existe la ruta ingresada por el usuario 404
path: "*", //cualquier ruta,
element: <div>Puede ir componente personalizado. ruta no encontrada</div>
}
])