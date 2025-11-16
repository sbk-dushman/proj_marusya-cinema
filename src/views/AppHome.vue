<template>
  <AppHero />
  <section class="rating-section">
    <div class="container">
      <h2 class="section-title">Топ 10 фильмов</h2>
    </div>
    <div class="container">
      <AppFilmList />
    </div>
  </section>
</template>
<script setup lang="ts">
import AppFilmList from './AppFilmList.vue'
import AppHero from './AppHero.vue'
</script>
<style></style>
