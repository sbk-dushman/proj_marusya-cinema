<template>
  <AppModal v-show="modalOpen" />

  <AppHeader />
  <main>
    <RouterView @close-modal="formClose" />
  </main>
  <AppFooter />
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './views/AppFooter.vue'
import AppModal from '@/views/AppModal.vue'
const modalOpen = defineModel({ default: false })

function formClose() {
  alert('2mox')
}
defineProps({
  // modalOpen: {
  //   type: Boolean,
  //   default: false,
  // },
})
</script>

<style scoped></style>
