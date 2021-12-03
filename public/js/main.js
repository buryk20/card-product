window.onload = function () {
  var allAboutProduct = navJs.querySelector(".card-prod-all-about-prod");
  var navSpecificarins = navJs.querySelector(".card-prod-nav-specificarins");
  var activNavColor = navJs.querySelector(".card-prod-new-navig__list");
  var navReviews = navJs.querySelector(".card-prod-nav-reviews");
  arrNav = function () {
    for (let j = 0; j < navActivJsColor.children.length; j++) {
      navActivJsColor.children[j].classList.remove('navActivColor');
      for (let i = 0; i < navJs.children.length; i++) {
        navJs.children[i].classList.remove("active-js-nav");
      }
    }
  }
  navJs.onclick = function (event) {
    var interEvent = event.target;
    var classClose = interEvent.closest(".card-prod-new-navig__list");
    if (interEvent.classList.contains("allAboutProd")) {
      arrNav();
      activNavColor.classList.add("navActivColor");
      allAboutProduct.classList.add("active-js-nav");
    } else if (interEvent.classList.contains("specificNav")) {
      arrNav();
      classClose.classList.add("navActivColor");
      navSpecificarins.classList.add("active-js-nav");
    } else if (interEvent.classList.contains("navReviews")) {
      arrNav();
      classClose.classList.add("navActivColor");
      navReviews.classList.add("active-js-nav");
    }
  };
};

// for (let j = 0; j < navJs.children.length; j++) {
//     navJs.children[j].classList.remove('navActivColor');
// }
