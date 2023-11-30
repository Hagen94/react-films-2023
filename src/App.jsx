import { RouterProvider } from 'react-router-dom'
import { appRouter } from './core/routes/app-router'
import Root_provider from './core/providers/root_provider'
// import function to register Swiper custom elements
import { register as registerswiper } from 'swiper/element/bundle';
const App = () => {


// register Swiper custom elements
registerswiper();





  return ( 
    <>
  <Root_provider>
        <RouterProvider router={appRouter}/>
  </Root_provider>    
 </> )
}

export default App; 
