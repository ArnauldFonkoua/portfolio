<script setup>
import { RouterLink } from 'vue-router'
import eheader from '../components/eheader.vue'
import efooter from '../components/efooter.vue'
import ehome  from '../components/ehome.vue'
</script>

<template>
    <header>
        <eheader msg="E-Commerce App" />
    </header>
   
    <RouterView />
    </template>

<style scoped>

</style>