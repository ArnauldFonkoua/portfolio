<script setup>
const props = defineProps({ portfolioData: Object })
</script>

<template>
  <section id="experience" class="py-24 px-4 max-w-5xl mx-auto">
    <h2 class="text-4xl font-bold mb-12">Experience</h2>
    <div class="space-y-8">
      <div v-for="(job, index) in portfolioData.experience" :key="index"
        class="group bg-white p-8 rounded-2xl border-2 border-gray-50 hover:border-indigo-100 transition-all shadow-sm">
        <div class="flex flex-col md:flex-row md:justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{{ job.title }}</h3>
          <span class="text-gray-400 font-mono text-sm uppercase tracking-widest">{{ job.duration }}</span>
        </div>
        <p class="text-indigo-600 font-bold mb-4">{{ job.company }}</p>
        <p class="text-gray-600 mb-6 leading-relaxed">{{ job.description }}</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in job.tags" :key="tag" class="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg uppercase tracking-wider">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
