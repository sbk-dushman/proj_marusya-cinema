<template>
  <AppModal v-show="modalOpen" />

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
import AppModal from '@/views/AppModal.vue'
const modalOpen = defineModel({ default: false })
const emit = defineEmits(['close-modal-action'])

defineProps({
  // modalOpen: {
  //   type: Boolean,
  //   default: false,
  // },
})
</script>

<style scoped></style>
