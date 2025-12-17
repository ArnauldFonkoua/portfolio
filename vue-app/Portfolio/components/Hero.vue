<script setup>
import Photo from './Photo.vue'

const props = defineProps({ portfolioData: Object, scrollTo: Function })
</script>

<template>
  <header id="top" class="pt-32 pb-20 px-4 bg-gradient-to-b from-indigo-50/50 to-white">
    <div class="max-w-6xl mx-auto">
      <!-- Photo and Text Grid -->
      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <!-- Photo Section -->
        <div class="flex justify-center md:order-2">
          <Photo :photoUrl="portfolioData.photo?.url" :name="portfolioData.name" />
        </div>

        <!-- Text Section -->
        <div class="text-center md:text-left md:order-1">
          <div class="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 rounded-full">
            Software Engineering Student
          </div>
          <h1 class="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Hi, I'm <span class="text-indigo-600">{{ portfolioData.name.split(' ')[0] }}</span>
          </h1>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed">
            {{ portfolioData.careerSummary }}
          </p>
          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <button @click="scrollTo('projects')" class="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all active:scale-95">
              View My Projects
            </button>
            <button @click="scrollTo('contact')" class="px-8 py-4 border-2 border-gray-200 font-bold rounded-xl hover:bg-gray-50 transition-all">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
