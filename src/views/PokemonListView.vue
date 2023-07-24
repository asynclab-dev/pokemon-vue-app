<script setup>
import NavBar from '../components/NavBar.vue'
import PokemonCharacter from '../components/PokemonCharacter.vue'
</script>

<template>
  <main>
    <NavBar />
    <section class="max-w-screen-lg py-3 mx-auto">
      <PokemonCharacter name="okay" />
      <PokemonCharacter name="okay" />
      <PokemonCharacter name="okay" />
      <PokemonCharacter name="okay" />
    </section>
  </main>
</template>
