<script setup>
import { ref } from 'vue'
import SearchIcon from './icons/SearchIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const searchInput = ref('')

function handleSearch() {
  if (searchInput.value.length > 0) return
  router.push(`/pokemon/${searchInput.value.toLowerCase()}`)
}
</script>

<template>
  <section class="max-w-[700px] mx-auto flex flex-col items-center gap-4">
    <section
      class="h-12 rounded-full px-3 py-2 bg-gray-200 flex justify-between items-center flex-wrap"
    >
      <SearchIcon />
      <input
        type="text"
        placeholder="Type pokemon name"
        class="h-full bg-transparent outline-none px-4 min-w-[300px]"
        v-model="searchInput"
      />
      <button
        data-test="search-button"
        class="px-3 bg-neutral-950 text-white font-normal h-full rounded-full border border-neutral-950 hover:bg-white hover:text-black"
        @click="handleSearch"
      >
        Search
      </button>
    </section>
  </section>
</template>
