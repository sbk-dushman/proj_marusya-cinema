<template>
  <section class="rating-section">
    <div class="container">
      <h2 class="section-title">Жанры фильмов</h2>
    </div>
    <div class="container">
      <AppList :list-type="1" />
    </div>
  </section>
</template>
<script setup lang="ts">
import AppList from '../components/AppList.vue'
</script>
<style></style>
