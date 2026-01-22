<template>
  <AppHero />
  <section class="rating-section">
    <div class="container">
      <h2 class="section-title">Топ 10 фильмов</h2>
    </div>
    <div class="container">
      <AppList :list-type="2" :list="topMoveieStore.getTopMoveie" />
    </div>
  </section>
</template>
<script setup lang="ts">
import AppList from '../components/AppList.vue'
import AppHero from '../components/AppHero.vue'
import { useTopMoveStore } from '@/stores/topMoveStore'
const topMoveieStore = useTopMoveStore()
</script>
<style></style>
