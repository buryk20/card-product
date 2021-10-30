import { createApp } from 'vue'
import App from './App.vue'
// import starRating from './components/starRating.vue'
import Vue from 'vue'
import starRating from './starRating.vue';

// Vue.config.productionTip = false;

new Vue({
    render: h => h(starRating),
}).$mount('#starRating')

import store from './store'

createApp(App).use(store).mount('#app');
createApp(starRating).use(starRating).mount('#starRating')

// createApp(StarRating).use(StarRating).mount('#StarRating')
