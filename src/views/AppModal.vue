<template>
  <div class="modal-container">
    <button @click.prevent="action" class="form__close">
      <svg class="close-icon">
        <use xlink:href="@/assets/sprite.svg#close-icon"></use>
      </svg>
    </button>
    <component :is="AppForm" class=""></component>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['close-modal'])
import AppForm from '../components/AppForm.vue'
// import AppHero from '../components/AppHero.vue'
// import { useTopMoveStore } from '@/stores/topMoveStore'
// const topMoveieStore = useTopMoveStore()
function action() {
  alert(1)
  // emit('close-modal')
}
</script>
<style>
.modal-container {
  background: #00000080;
  /* background: #ff0808; */
  z-index: 9;
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.form {
  background-color: var(--base-white);
  border-radius: 24px;
  padding: 64px 40px;
  max-width: 420px;
  max-height: 709px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
}

.close-icon {
  fill: var(--base-black);
}
</style>
