<script>
export default {
  props: {
    name: String
  }
}
</script>

<template>
  <div class="rounded-2xl px-3 py-1 font-medium text-xs text-center bg-orange-100 text-orange-400">
    {{ name }}
  </div>
</template>
