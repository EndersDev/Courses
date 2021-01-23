import { createApp } from 'vue'
import router from './router'

import 'animate.css'
import './assets/fonts.css'
import './assets/tailwind.css'

const App = { template: '  <router-view />' }

createApp(App)
	.use(router)
	.mount('#app')
