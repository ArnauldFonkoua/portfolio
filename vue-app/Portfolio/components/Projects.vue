<script setup>
const props = defineProps({ portfolioData: Object })
</script>

<template>
  <section id="projects" class="py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-16">Projects</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="project in portfolioData.projects" :key="project.name"
          class="bg-white rounded-2xl overflow-hidden group border border-gray-100 hover:shadow-2xl transition-all">
          <div class="h-48 bg-gray-100">
            <img :src="project.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3">{{ project.name }}</h3>
            <p class="text-gray-500 text-sm mb-6">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded uppercase">
                {{ tag }}
              </span>
            </div>
            <a :href="project.link" class="inline-flex items-center gap-2 font-bold text-indigo-600 hover:gap-3 transition-all">
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
