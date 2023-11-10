import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";
import vars from "../_vars";

import {
  toggleCustomClass,
  removeCustomClass,
  removeClassInArray,
  toggleClassInArray
} from "../functions/customFunctions";

const {overlay, header, burgers, mobileMenu, links} = vars;


const mobileMenuHandler = function (overlay, mobileMenu, burgers) {
  burgers.forEach(function(burger){
    burger.addEventListener("click", function () {
      toggleCustomClass(mobileMenu, "active");
      toggleClassInArray(burgers, "active");
      toggleCustomClass(overlay, "active");
  
      if (burger.classList.contains("active")) {
        disableScroll();
      } else {
        enableScroll();
      }
    });
  })
};

links.forEach(function(link){
  link.addEventListener('click', function(e){
    const id = e.target.getAttribute('href').replace('#', '');
    let headerHeight = header.clientHeight;

    removeCustomClass(mobileMenu);
    removeClassInArray(burgers);
    removeCustomClass(overlay);
    enableScroll(document.getElementById(id).offsetTop - (headerHeight))
  })
})

const hideMenuHandler = function (overlay, mobileMenu, burger) {
  removeCustomClass(mobileMenu);
  removeClassInArray(burgers);
  removeCustomClass(overlay);

  enableScroll();
};

if (overlay) {
  mobileMenuHandler(overlay, mobileMenu, burgers);
  overlay.addEventListener("click", function (e) {
    if (e.target.classList.contains("overlay")) {
      hideMenuHandler(overlay, mobileMenu, burgers);
    }
  });
}