<script setup>
import { RouterLink , RouterView } from 'vue-router'
import home from './views/home.vue'
import efooter from './components/efooter.vue'
</script>

<template>
   <main>
    <home />
   </main>
   <footer>
       <efooter />
       </footer>
</template>


<style scoped>
*{
    margin: 0;
    padding: 0;
}
</style>
