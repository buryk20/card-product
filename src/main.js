import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import starRating from './starRating.vue';
import btnTrans from './components/btn-semi-transparent.vue';

createApp(App).use(store).mount('#app');
createApp(starRating).use(starRating).mount('#starRating');

// createApp(StarRating).use(StarRating).mount('#StarRating')

const vueBtns = document.querySelectorAll('.vue-buttomSemiTransparent');
for (const vueBtn of vueBtns) {
    createApp(btnTrans).use(store).mount(vueBtn);
}
