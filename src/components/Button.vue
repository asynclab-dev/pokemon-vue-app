<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps({
  handleClick: () => {}
})
</script>

<template>
  <button
    @click="handleClick"
    class="text-sm lowercase font-normal bg-gray-300 py-1 rounded-full px-3 hover:ring-1 hover:ring-amber-400"
  >
    <slot />
  </button>
</template>
