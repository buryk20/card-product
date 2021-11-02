import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import starRating from './starRating.vue';
import buttomSemiTransparent from './btnSemiTransparent.vue';

createApp(App).use(store).mount('#app');
createApp(starRating).use(starRating).mount('#starRating');
createApp(buttomSemiTransparent).use(buttomSemiTransparent).mount('#buttomSemiTransparent');

// createApp(StarRating).use(StarRating).mount('#StarRating')
