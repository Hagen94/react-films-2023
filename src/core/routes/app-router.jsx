import { createBrowserRouter } from "react-router-dom";
import Login_views from "../features/login/views/login_views";
import Home_views from "../features/home/views/home_views";


export const appRouter = createBrowserRouter([
    {path: "/",
    element: <Home_views/>,
    

},
    {path:"/login",
    element: <Login_views/>,
},
])