import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import 'animate.css'
import './assets/css/fonts.css'
import './assets/css/tailwind.css'

createApp(App)
  .use(router)
  .mount('#app')
