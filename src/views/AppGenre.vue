<template>
  <section class="rating-section">
    <div class="container">
      <h2 class="section-title">Драма</h2>
    </div>
    <div class="container">
      <AppList :list-type="2" />
    </div>
  </section>
</template>
<script setup lang="ts">
import AppList from '../components/AppList.vue'
</script>
<style></style>
