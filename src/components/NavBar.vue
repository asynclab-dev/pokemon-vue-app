<script setup>
import StyledRouter from './StyledRouter.vue'
</script>

<template>
  <header class="pt-2 pb-4 px-2 bg-neutral-200">
    <section class="max-w-screen-xl mx-auto flex items-center justify-between">
      <RouterLink to="/">
        <img src="../assets/pokemon.svg" alt="pokemon" class="h-16" />
      </RouterLink>

      <nav class="flex items-center gap-3">
        <StyledRouter to="/pokemon">Explore</StyledRouter>
        <StyledRouter to="/pokemon/all">Pokemons</StyledRouter>
      </nav>
    </section>
  </header>
</template>
