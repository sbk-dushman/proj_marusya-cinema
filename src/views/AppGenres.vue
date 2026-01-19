<template>
  <section class="rating-section">
    <div class="container">
      <h2 class="section-title">Жанры фильмов</h2>
    </div>
    <div class="container">
      <AppList :list="ganreStore.ganreList || null" :list-type="1" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { useGanresStore } from '@/stores/ganreStore'
import AppList from '../components/AppList.vue'
const ganreStore = useGanresStore()
</script>
<style></style>
