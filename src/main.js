import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import starRating from './components/starRating.vue';
import btnTrans from './components/btn-semi-transparent.vue';
import buttonBuy from './btnBuy.vue';
import delivery from './delivery.vue';
import slider from './slider.vue';
import specifications from './components/specifications.vue';
import description from './components/description.vue';
import floatingCard from './components/floatingCard.vue';

import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store).mount('#app');
createApp(starRating).use(VueAxios, axios).mount('#starRating');
createApp(delivery).use(delivery).mount('#delivery');
createApp(slider).use(slider).mount('#slider');

const floatingCards = document.querySelectorAll('.vue-floatingCard');
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

const vueBtns = document.querySelectorAll('.vue-buttomSemiTransparent');
for (const vueBtn of vueBtns) {
    createApp(btnTrans).use(store).mount(vueBtn);
}
