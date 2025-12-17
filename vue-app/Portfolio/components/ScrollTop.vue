<script setup>
const props = defineProps({ showScrollTop: Boolean, scrollTo: Function })
</script>

<template>
  <button v-if="showScrollTop" @click="scrollTo('top')"
    class="fixed bottom-8 right-8 p-4 bg-indigo-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 z-50">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
  </button>
</template>

<style scoped></style>
