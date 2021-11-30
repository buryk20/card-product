window.onload = function () {

    var allAboutProduct = document.querySelector('.card-prod-all-about-prod');
    var navSpecificarins = document.querySelector('.card-prod-nav-specificarins');
    navJs.onclick = function (event) {
        if (event.target.classList.contains('allAboutProd')) {
            for (let i = 0; i < navJs.children.length; i++) {
                navJs.children[i].classList.remove('active-js-nav');

            };
            event.target.classList.add('navActivColor');
            allAboutProduct.classList.add('active-js-nav');

        } else if (event.target.classList.contains('specificNav')) {
            for (let i = 0; i < navJs.children.length; i++) {
                navJs.children[i].classList.remove('active-js-nav');
            };
            event.target.classList.add('navActivColor');
            navSpecificarins.classList.add('active-js-nav');
        }
    }
}


// for (let j = 0; j < navJs.children.length; j++) {
//     navJs.children[j].classList.remove('navActivColor');
// }