<script setup>
import SearchIcon from './icons/SearchIcon.vue'
import Button from './Button.vue'
</script>

<template>
  <section class="max-w-[700px] mx-auto flex flex-col items-center gap-4">
    <section
      class="h-12 rounded-full px-3 py-2 bg-gray-200 flex justify-between items-center flex-wrap"
    >
      <SearchIcon />
      <input
        type="text"
        placeholder="Search anything"
        class="h-full bg-transparent outline-none px-4 min-w-[300px]"
      />
      <button
        class="px-3 bg-neutral-950 text-white font-normal h-full rounded-full border border-neutral-950 hover:bg-white hover:text-black"
      >
        Search
      </button>
    </section>
    <div class="px-2 flex justify-between gap-2">
      <Button>Pokemon</Button>
      <Button>Berries</Button>
      <Button>Contests</Button>
      <Button>Encounter</Button>
      <Button>Evolution</Button>
      <Button>Games</Button>
      <Button>Items</Button>
      <Button>Moves</Button>
      <Button>Machines</Button>
    </div>
  </section>
</template>
