import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import 'animate.css'
import './assets/fonts.css'
import './assets/tailwind.css'

createApp(App)
  .use(router)
  .mount('#app')
