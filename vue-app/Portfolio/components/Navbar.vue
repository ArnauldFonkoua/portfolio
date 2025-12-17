<script setup>
import { computed } from 'vue'

const props = defineProps({
  portfolioData: Object,
  navItems: Array,
  isMenuOpen: Boolean,
  toggleMenu: Function,
  scrollTo: Function
})

const firstName = computed(() => {
  return props.portfolioData?.name?.split(' ')[0] || ''
})
</script>

<template>
  <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="font-bold text-xl text-indigo-600 cursor-pointer" @click="scrollTo('top')">
        {{ firstName }} Portfolio
      </div>

      <div class="hidden md:flex gap-8">
        <button v-for="item in navItems" :key="item.id"
          @click="scrollTo(item.id)"
          class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
          {{ item.name }}
        </button>
      </div>

      <button class="md:hidden p-2 text-gray-600" @click="toggleMenu()">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-white border-b p-4 space-y-4 shadow-xl">
      <button v-for="item in navItems" :key="item.id"
        @click="scrollTo(item.id)"
        class="block w-full text-left p-2 hover:bg-gray-50 rounded font-medium">
        {{ item.name }}
      </button>
    </div>
  </nav>
</template>

<style scoped></style>
