<script setup>
const props = defineProps({ portfolioData: Object })
</script>

<template>
  <section id="education" class="py-24 bg-gray-50 px-4">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl font-bold mb-12 text-center">Education</h2>
      <div class="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
        <div class="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
          <div>
            <h3 class="text-2xl font-bold">{{ portfolioData.education.institution }}</h3>
            <p class="text-indigo-600 text-lg font-semibold">{{ portfolioData.education.degree }}</p>
          </div>
          <span class="mt-4 md:mt-0 px-4 py-1 bg-indigo-50 text-indigo-600 rounded-full font-bold text-sm">
            {{ portfolioData.education.duration }}
          </span>
        </div>
        <p class="text-gray-600 text-lg leading-relaxed">{{ portfolioData.education.details }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
