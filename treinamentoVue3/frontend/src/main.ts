import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import Toast, { POSITION } from 'vue-toastification'

import 'animate.css'
import './assets/css/fonts.css'
import './assets/css/tailwind.css'
import 'vue-toastification/dist/index.css'

createApp(App)
  .use(router)
  .use(Toast, { position: POSITION.BOTTOM_RIGHT })
  .mount('#app')
