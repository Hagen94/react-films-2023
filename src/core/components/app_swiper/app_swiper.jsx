import { useRef } from 'react';


export const MyComponent = ({children, ...props}) => {
  const swiperElRef = useRef(null);


  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="4"
      navigation="true" // flechas de navegacion
      pagination="false"//puntos de navegacion
      scrollbar="false" 
      loop="false"
      space-between="10"
{...props}
    >
     {children}
    </swiper-container>
  )};
