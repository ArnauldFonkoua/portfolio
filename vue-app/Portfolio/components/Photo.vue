<script setup>
const props = defineProps({
  photoUrl: String,
  name: String
})
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-indigo-600">
      <img
        v-if="photoUrl"
        :src="photoUrl"
        :alt="name"
        class="w-full h-full object-cover"
      />
      <div v-else class="w-full h-full bg-gradient-to-br from-indigo-300 to-indigo-600 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
