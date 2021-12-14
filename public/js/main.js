window.onload = function () {
  var allAboutProduct = navJs.querySelector(".card-prod-all-about-prod");
  var navSpecificarins = navJs.querySelector(".card-prod-nav-specificarins");
  var activNavColor = navJs.querySelector(".card-prod-new-navig__list");
  var navReviews = navJs.querySelector(".card-prod-nav-reviews");
  var navMult = navJs.querySelector(".card-prod-nav-multimedia");
  var navDov = navJs.querySelector(".card-prod-nav-downloads");

  navJs.onclick = function (event) {
    var interEvent = event.target;
    var classClose = interEvent.closest(".card-prod-new-navig__list");
    arrNav = function () {
      for (let j = 0; j < navActivJsColor.children.length; j++) {
        navActivJsColor.children[j].classList.remove('navActivColor');
        for (let i = 0; i < navJs.children.length; i++) {
          navJs.children[i].classList.remove("active-js-nav");
        }
      }
      classClose.classList.add("navActivColor");
    }
    if (interEvent.classList.contains("allAboutProd")) {
      arrNav();
      allAboutProduct.classList.add("active-js-nav");
    }  if (interEvent.classList.contains("specificNav")) {
      arrNav();

      navSpecificarins.classList.add("active-js-nav");
    }  if (interEvent.classList.contains("navReviews")) {
      arrNav();
      navReviews.classList.add("active-js-nav");
    } if (interEvent.classList.contains("navMultimedia")) {
      arrNav();
      navMult.classList.add("active-js-nav");
    } if (interEvent.classList.contains("navDownloads")) {
      arrNav();
      navDov.classList.add("active-js-nav");
    }
  };
};

// for (let j = 0; j < navJs.children.length; j++) {
//     navJs.children[j].classList.remove('navActivColor');
// }
