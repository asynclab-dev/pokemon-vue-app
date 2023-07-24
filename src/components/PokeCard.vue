<script setup>
import PokeTypePill from './PokeTypePill.vue'
import { RouterLink } from 'vue-router'
defineProps({
  imgUrl: String,
  name: String,
  exp: String,
  url: String,
  type: Array
})
</script>

<template>
  <RouterLink
    :to="url"
    class="h-36 w-[310px] p-3 rounded-md bg-white border-2 border-gray-200 cursor-pointer flex items-center gap-2 shadow-xl hover:shadow hover:transition-shadow"
  >
    <img
      :src="imgUrl"
      alt="pokemon character"
      class="flex-1 object-contain object-center max-h-[8.5rem]"
    />
    <div class="flex-1">
      <h5 class="text-center font-semibold text-lg capitalize mb-2">{{ name }}</h5>
      <div class="flex items-center justify-center gap-2 flex-wrap">
        <PokeTypePill v-for="(t, idx) in type" :key="idx" :name="t" />
      </div>
      <p class="text-center font-medium text-xs text-purple-700 mt-2">Exp: {{ exp }}</p>
    </div>
  </RouterLink>
</template>
