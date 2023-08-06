<script setup>
import { useRoute, useRouter } from 'vue-router'
import TurLeftIcon from '../components/icons/TurnLeftIcon.vue'
import PokeTypePill from '../components/PokeTypePill.vue'
import { reactive, onMounted } from 'vue'
const { params } = useRoute()
const router = useRouter()
const pokemon = reactive({
  data: {},
  isloading: false,
  isError: false
})

onMounted(async () => {
  pokemon.isloading = true
  const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${params?.pokemon}`)
  if (!rawData || rawData.status !== 200) {
    pokemon.data = {}
    pokemon.isError = true
    pokemon.isloading = false
    return
  }
  pokemon.data = await rawData.json()
  pokemon.isError = false
  pokemon.isloading = false
})
</script>

<template>
  <!-- Show data -->
  <main
    v-if="!pokemon.isloading && !pokemon.isError"
    class="flex items-center justify-center h-screen bg-gray-100"
  >
    <section class="w-[300px] mx-auto rounded-md p-4 bg-white drop-shadow-lg flex flex-col">
      <h3 class="font-semibold text-2xl text-center capitalize">{{ pokemon.data.name }}</h3>
      <img
        :src="pokemon.data.sprites?.other?.['official-artwork']?.front_default"
        :alt="pokemon.data.name"
        class="max-w-[90%] mx-auto aspect-square object-contain object-center"
      />
      <div class="flex items-center justify-center gap-2">
        <PokeTypePill v-for="t in pokemon.data?.types" :name="t?.type?.name" :key="t?.slot" />
      </div>
      <p class="bg-purple-100 text-center my-1 py-1 rounded-md text-purple-600 font-medium">
        Height: {{ pokemon.data.height }}
      </p>
      <p class="bg-purple-100 text-center my-1 py-1 rounded-md text-purple-600 font-medium">
        Moves: {{ pokemon.data.moves?.length }}
      </p>
      <p class="bg-purple-100 text-center my-1 py-1 rounded-md text-purple-600 font-medium">
        Experiance: {{ pokemon.data.base_experience }}
      </p>

      <button
        class="bg-gray-950 mt-2 py-1 rounded-md text-white flex items-center justify-center gap-2"
        @click="router.go(-1)"
      >
        <TurLeftIcon /> Back
      </button>
    </section>
  </main>
  <!-- Show loading or error state -->
  <main v-else class="flex items-center justify-center h-screen bg-gray-100">
    <h2 v-if="pokemon.isloading">Loading...</h2>
    <div v-else class="flex items-center flex-col">
      <h2 class="text-xl font-semibold">Something went wrong</h2>
      <p>
        No result found for
        <span class="font-medium underline">&apos;{{ params?.pokemon }}&apos;</span>
      </p>
      <button
        class="bg-gray-950 mt-2 py-1 w-40 rounded-md text-white flex items-center justify-center gap-2"
        @click="router.go(-1)"
      >
        <TurLeftIcon /> Back
      </button>
    </div>
  </main>
</template>
