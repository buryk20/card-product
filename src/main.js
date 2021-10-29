import { createApp } from 'vue'
import App from './App.vue'
import starRating from './components/starRating.vue'

import store from './store'

createApp(App).use(store).mount('#app')

createApp(starRating).use(starRating).mount('#starRating')
