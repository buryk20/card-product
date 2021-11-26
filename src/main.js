import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import starRating from './starRating.vue';
import btnTrans from './components/btn-semi-transparent.vue';
import buttonBuy from './btnBuy.vue';
import delivery from './delivery.vue';
import slider from './slider.vue';
import specifications from './components/specifications.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store).mount('#app');
createApp(starRating).use(VueAxios, axios).mount('#starRating');
createApp(delivery).use(delivery).mount('#delivery');
createApp(slider).use(slider).mount('#slider');

// createApp(StarRating).use(StarRating).mount('#StarRating')

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
