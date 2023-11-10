import Swiper from '../vendor/swiper';
import vars from "../_vars";

const {slider} = vars;

if(slider){
  const swiper = new Swiper(slider, {  
    slidesPerView: 4.6,  
    spaceBetween: 35,
    observer: true,
    observeParents: true,
    loop:true,
    speed: 1000,
    autoHeight: true,
    autoplay:{
      delay: 4000,
    },
     
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      576: {
        slidesPerView: 'auto',
      },

      1024: {
        
        slidesPerView: 4,
      },

      1340: {
        slidesPerView: 4.5,
      },

      1600: {
        slidesPerView: 5,
      },

      1920: {
          centeredSlides:true,
        slidesPerView: 6,
      },
    },
  });
  }