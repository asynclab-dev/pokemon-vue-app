<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  name: String
})
</script>

<template>
  <RouterLink
    :to="/pokemon/di"
    class="w-52 h-10 rounded-lg bg-gradient-to-t from-gray-200 to-white border border-neutral-600"
  >
    <p>{{ name }}</p>
  </RouterLink>
</template>
