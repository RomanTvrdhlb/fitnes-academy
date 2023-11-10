import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import vars from "../_vars";
import {addCustomClass,removeCustomClass} from '../functions/customFunctions';

const {slider} = vars;

if(slider){
  const swiper = new Swiper(slider, {
    modules: [Autoplay],
    slidesPerView: 4.6,  
    spaceBetween: 35,
    observer: true,
    observeParents: true,
    loop:true,
    speed: 2000,
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
        slidesPerView: 4.6,
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