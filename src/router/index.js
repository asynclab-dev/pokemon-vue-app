import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonIndexView from '../views/PokemonIndexView.vue'
import PokemonView from '../views/PokemonView.vue'

let routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/pokemon/', name: 'pokemon', component: PokemonIndexView },
  { path: '/pokemon/:pokemon', name: 'pokemon-details', component: PokemonView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export { routes }

export default router
