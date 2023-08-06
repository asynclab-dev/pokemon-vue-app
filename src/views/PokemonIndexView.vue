<script setup>
import { ref } from 'vue'
import data from '../data'
import NavBar from '../components/NavBar.vue'
import PokemonCard from '../components/PokemonCard.vue'
import SearchBar from '../components/SearchBar.vue'
const pokemons = ref(data)
</script>

<template>
  <NavBar />
  <main class="bg-neutral-950 px-2 py-4 min-h-screen font-light">
    <SearchBar />

    <section class="max-w-screen-lg mx-auto py-6 flex flex-wrap gap-4 justify-center">
      <PokemonCard
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :name="pokemon.name"
        :imgUrl="pokemon.imgUrl"
        :url="pokemon.name"
        :exp="pokemon.exp"
        :type="pokemon.type"
      />
    </section>
  </main>
</template>
