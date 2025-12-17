<script setup>
const props = defineProps({ portfolioData: Object })
</script>

<template>
  <section id="skills" class="py-24 bg-indigo-600 px-4">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl font-bold mb-12 text-white text-center">Technical Skills</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="skill in portfolioData.skills" :key="skill.name" class="bg-indigo-500 p-6 rounded-2xl text-center text-white border border-indigo-400">
          <div class="mb-3 flex justify-center opacity-80">
              <svg v-if="skill.icon === 'code'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              <svg v-else-if="skill.icon === 'terminal'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          </div>
          <p class="font-bold">{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
