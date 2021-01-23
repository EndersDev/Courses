import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const Feedbacks = () => import('../views/Feedbacks.vue')
const Credentials = () => import('../views/Credentials.vue')

const routes = [
  // rotas, 3 paginas
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: { hasAuth: true } // tem q ta logado pra vir aqui
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials
  },
  { path: '/:pathMatch(.*)*', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
