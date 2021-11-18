import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import starRating from './starRating.vue';
import btnTrans from './components/btn-semi-transparent.vue';
import buttonBuy from './btnBuy.vue';
import delivery from './delivery.vue';
import sliderPhoto from './sliderPhotoTop.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

// import { createApp } from "vue";
// import starRating from "./starRating.vue";
// import vue3StarRatings from "vue3-star-ratings";

// const starRating = createApp(starRating);

// starRating.component("vue3-star-ratings", vue3StarRatings);L

createApp(App).use(store).mount('#app');
createApp(starRating).use(VueAxios, axios).mount('#starRating');
createApp(delivery).use(delivery).mount('#delivery');
createApp(sliderPhoto).use(sliderPhoto).mount('#sliderPhoto');

// createApp(StarRating).use(StarRating).mount('#StarRating')

const btnBuys = document.querySelectorAll('.vue-btnBuy');
for (const btnBuy of btnBuys) {
    createApp(buttonBuy).use(store).mount(btnBuy);
}
const vueBtns = document.querySelectorAll('.vue-buttomSemiTransparent');
for (const vueBtn of vueBtns) {
    createApp(btnTrans).use(store).mount(vueBtn);
}
