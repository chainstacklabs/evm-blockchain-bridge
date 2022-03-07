import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import './css/index.css'

import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).mount('#app')
