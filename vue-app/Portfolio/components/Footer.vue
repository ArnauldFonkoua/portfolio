<script setup>
const props = defineProps({ portfolioData: Object })
</script>

<template>
  <footer class="py-12 bg-gray-950 text-center text-gray-600 text-sm">
    <p class="font-bold text-gray-400 mb-2">© {{ new Date().getFullYear() }} {{ portfolioData.name }}</p>
    <p>Built with Vue 3 & Tailwind CSS</p>
  </footer>
</template>

<style scoped></style>
