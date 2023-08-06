<script setup>
defineProps({
  url: String
})
</script>

<template>
  <RouterLink
    :to="url"
    class="bg-gradient-to-t from-amber-500 to bg-amber-300 min-w-[100px] text-center text-black/90 px-4 py-2 rounded-md"
  >
    <slot />
  </RouterLink>
</template>
