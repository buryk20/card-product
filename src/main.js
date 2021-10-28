import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

import store from './store'

createApp(App).use(store).mount('#app')

createApp(HelloWorld).use(store).mount('#app2')
