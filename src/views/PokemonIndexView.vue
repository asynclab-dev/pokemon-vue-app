<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import PokeCard from '../components/PokeCard.vue'
import SearchBar from '../components/SearchBar.vue'
const pokemons = ref([
  {
    name: 'kyogre',
    id: 382,
    imgUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png',
    url: 'htttp',
    exp: '335',
    type: ['water']
  },
  {
    name: 'zekrom',
    id: 644,
    imgUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png',
    url: 'htttp',
    exp: '340',
    type: ['dragon', 'electric']
  },
  {
    name: 'xerneas',
    id: 716,
    imgUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png',
    url: 'htttp',
    exp: '340',
    type: ['fairy']
  },
  {
    name: 'charmeleon',
    id: 5,
    imgUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
    url: 'htttp',
    exp: '142',
    type: ['fire']
  },
  {
    name: 'golem',
    id: 76,
    imgUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png',
    url: 'htttp',
    exp: '223',
    type: ['rock', 'ground']
  },
  {
    name: 'zacian',
    id: 888,
    imgUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png',
    url: 'htttp',
    exp: '335',
    type: ['fairy']
  }
])
</script>

<template>
  <NavBar />
  <main class="bg-neutral-950 px-2 py-4 min-h-screen font-light">
    <SearchBar />

    <section class="max-w-screen-lg mx-auto py-6 flex flex-wrap gap-4 justify-center">
      <PokeCard
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :name="pokemon.name"
        :imgUrl="pokemon.imgUrl"
        :url="pokemon.url"
        :exp="pokemon.exp"
      />
    </section>
  </main>
</template>
