import './assets/css/daisyui.min.css'
import './assets/js/tailwindcss-3.4.4.js';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
