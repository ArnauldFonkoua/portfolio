<script setup>
const props = defineProps({ portfolioData: Object, scrollTo: Function })
</script>

<template>
  <section id="about" class="py-24 px-4 max-w-5xl mx-auto">
    <div class="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 class="text-4xl font-bold mb-6">About Me</h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-6">{{ portfolioData.bio }}</p>
        <div class="flex gap-4">
           <a :href="'https://github.com/' + portfolioData.contact.github" target="_blank" class="p-3 bg-gray-100 rounded-full hover:bg-indigo-600 hover:text-white transition-all">
             <!-- GitHub Icon -->
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
           </a>
           <a :href="'https://linkedin.com/in/' + portfolioData.contact.linkedin" target="_blank" class="p-3 bg-gray-100 rounded-full hover:bg-indigo-600 hover:text-white transition-all">
             <!-- LinkedIn Icon -->
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
           </a>
        </div>
      </div>
      <div class="bg-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
        <h3 class="text-2xl font-bold mb-6 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          Core Strengths
        </h3>
        <ul class="space-y-4 text-indigo-100">
          <li class="flex items-center gap-3"><span class="w-2 h-2 bg-white rounded-full"></span> Rapid Prototyping (MVP)</li>
          <li class="flex items-center gap-3"><span class="w-2 h-2 bg-white rounded-full"></span> Problem Solving & Maintenance</li>
          <li class="flex items-center gap-3"><span class="w-2 h-2 bg-white rounded-full"></span> Agile Methodologies (Scrum)</li>
          <li class="flex items-center gap-3"><span class="w-2 h-2 bg-white rounded-full"></span> Eager Continuous Learner</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
