window.onload = function () {
  var allAboutProduct = navJs.querySelector(".card-prod-all-about-prod");
  var navSpecificarins = navJs.querySelector(".card-prod-nav-specificarins");
  var activNavColor = navJs.querySelector(".card-prod-new-navig__list");
  arrNav = function() {
    for (let j = 0; j < navActivJsColor.children.length; j++) {
        navActivJsColor.children[j].classList.remove('navActivColor');
        for (let i = 0; i < navJs.children.length; i++) {
            navJs.children[i].classList.remove("active-js-nav");
          }
        }
    }
  navJs.onclick = function (event) {
    if (event.target.classList.contains("allAboutProd")) {
        arrNav();
        activNavColor.classList.add("navActivColor");
        allAboutProduct.classList.add("active-js-nav");
    } else if (event.target.classList.contains("specificNav")) {
        arrNav();
        event.target.closest(".card-prod-new-navig__list").classList.add("navActivColor");
        navSpecificarins.classList.add("active-js-nav");
    }
  };
};

// for (let j = 0; j < navJs.children.length; j++) {
//     navJs.children[j].classList.remove('navActivColor');
// }
