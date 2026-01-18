<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './views/AppFooter.vue'
</script>
<style scoped></style>
