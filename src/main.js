import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import starRating from './components/starRating.vue';
import buttonBuy from './components/UI/btnBuy.vue';
import delivery from './delivery.vue';
import slider from './slider.vue';
import specifications from './components/specifications.vue';
import description from './components/description.vue';
import floatingCard from './components/floatingCard.vue';
import ratingReview from './components/ratingReviews.vue';
import starReview from './components/starReviews.vue';
import ratingTotalreviews from './components/ratingTotalreviews.vue';
import appendix from './components/appendix.vue';

import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store).mount('#app');
createApp(starRating).use(VueAxios, axios).mount('#starRating');
createApp(delivery).use(delivery).mount('#delivery');
createApp(slider).use(slider).mount('#slider');
createApp(appendix).use(appendix).mount('#appendix');

const appendixsV = document.querySelectorAll('.vue-appendix');
for (const appendixV of appendixsV) {
    createApp(appendix).use(store).mount(appendixV);
}

const reviewsT = document.querySelectorAll('.vue-reviews-rating-total');
for (const reviewT of reviewsT) {
    createApp(ratingTotalreviews).use(store).mount(reviewT);
}


const starReviews = document.querySelectorAll('.vue-reviews-stars');
for (const starR of starReviews) {
    createApp(starReview).use(store).mount(starR);
}

const ratingReviews = document.querySelectorAll('.vue-rating-review');
for (const raring of ratingReviews) {
    createApp(ratingReview).use(store).mount(raring);
}

const floatingCards = document.querySelectorAll('.vue-floating-сard');
for (const floating of floatingCards) {
    createApp(floatingCard).use(store).mount(floating);
}

const descripNavs = document.querySelectorAll('.vue-descripNav');
for (const descripNav of descripNavs) {
    createApp(description).use(store).mount(descripNav);
}

const btnBuys = document.querySelectorAll('.vue-btnBuy');
for (const btnBuy of btnBuys) {
    createApp(buttonBuy).use(store).mount(btnBuy);
}

const specificationsCards = document.querySelectorAll('.specificationsCard')
for (const specificationsCard of specificationsCards) {
    createApp(specifications).use(store).mount(specificationsCard);
}

