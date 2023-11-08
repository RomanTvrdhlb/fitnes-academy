import Swiper from 'swiper';
import { Navigation, Pagination, Grid, EffectCreative, EffectFade, Autoplay, Parallax } from 'swiper/modules';

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
     
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //   },
    //   576: {
    //     slidesPerView: 'auto',
    //   },
    // },
  });
  }