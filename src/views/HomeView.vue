<script setup>
import StyledRouter from '../components/StyledRouter.vue'
</script>

<template>
  <main
    class="h-screen bg-gray-50 relative overflow-hidden z-0 flex flex-col items-center justify-end pb-[5%]"
  >
    <img src="../assets/bg.jpg" class="absolute top-0 -z-10 sepia" />
    <div class="flex items-center flex-col gap-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm">
      <h1 class="text-5xl font-bold text-white">Welcome to Pokemon GoX App</h1>
      <p class="text-white text-lg">Find any and all information about your favourite pokemons</p>
      <div class="flex items-center justify-center gap-6">
        <StyledRouter to="/pokemon">Explore</StyledRouter>
      </div>
    </div>
  </main>
</template>
