import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonIndexView from '../views/PokemonIndexView.vue'
import PokemonListView from '../views/PokemonListView.vue'
import PokemonView from '../views/PokemonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/pokemon/', name: 'pokemon', component: PokemonIndexView },
    { path: '/pokemon/all', name: 'pokemon-list', component: PokemonListView },
    { path: '/pokemon/:id', name: 'pokemon-details', component: PokemonView }
  ]
})

export default router
