import { createBrowserRouter } from "react-router-dom";
import Private_route from "../auth/components/private_route";
import Public_route from "../auth/components/public_route";
import { Home_views } from "../../features/home/views/Home_views";
import Login_views from "../../features/login/views/Login_views"
import SearchMovie from "../../features/home/searchMovie/searchMovie";




export const appRouter = createBrowserRouter([
{path: "/",
element:<Private_route>
            <Home_views/>
        </Private_route>    
},
{path:"/login",
element:<Public_route>
            <Login_views/>
        </Public_route>,
},{
path: "/searchMovie",
element: <Private_route>
            <SearchMovie/>
        </Private_route> 
},
{
path: "*", 
element: <div>Puede ir componente personalizado. ruta no encontrada</div>
}
])