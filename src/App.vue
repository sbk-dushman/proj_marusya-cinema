<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './views/AppHeader.vue'
import AppFooter from './views/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
         <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
