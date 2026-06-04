<template>
  <section class="account-section container">
    <h2 class="section-title">Мой аккаунт</h2>

    <ul class="account-section__tabs tabs">
      <button @click="changeTab()" class="tabs__favorite" data-tabs-path="favorite">
        <svg><use xlink:href="@/assets/sprite.svg#heart-icon"></use></svg> Избранные фильм
      </button>
      <button @click="" class="tabs__settings" data-tabs-path="profile">Настройка аккаунта</button>
    </ul>
    <component :is="tabs[currentTab.name]" class="tab-сontent"></component>

    <button class="button">Выйти из аккаунта</button>
  </section>
</template>
<script setup lang="ts">
import { useGanresStore } from '@/stores/ganreStore'
import AppList from '../components/AppList.vue'
import AppProfile from '../components/AppProfile.vue'
import type { TopMovieList } from '@/types'
import type { PropType } from 'vue'
// const ganreStore = useGanresStore()
// Todo prop + model связь
//play.vuejs.org/#eNqNVdFu2jAU/RUre6CVCLRrtYcMqnVTpW0PW7X1rZmm4NyAS2JHtsOoEP++Y5uEoJYKkJB97/HxOTc3l010W9ejVUNREk0M16K2zJBt6ptUiqpW2rKvqiJWaFWxwWjsNg4+6NL3yljT5f3uEHCr+UKs9hS7/SFowzQVbLsDhRRLJVfSWMYbrUnah2zGpg53NnAyBuepbBE2mxnkNjjk9Q7dwmvxq92VqdymcjIONmEQG0tVXWaWsGNskosV42VmzDSNcqpUGvk4MrPGWoUDboPPKi6UBujs79Ddfc6E9BrSqIMkS3oGAtF+sGV/HCARB9bBEPYzbqEwOfA6nTpStv3TY/jES8GXYDgoSv+WnWTGNptwHKa9h3G4zhm32HKF0ktQsEQ4SU7/454Vl3a18PQ3k3F3JJRrjHphNRn3qoitsc+lW45cCcMzKZS0cZFVonxOmMmkiQ1pUXx0uZnSOemEXdZrZlQpcvaOiHqpWGe5aEzC3tdrH66zPBdyjsAFzlzhx4erTM+FjK2qQUZVPzZTcF4l7LrFNrgfGkriNmESnnxUrUgXpfoXrxOWNVYhiOLByf5hBT+dgg8QcNmS7uRCQFxSYTvdVy/zWswXxwAHpeCc+xQejFFI1UpISzrAM76ca9XIPGHvigv3fc10DLp+3N/dhWGwZy9ZuBoEkwf0dOG+L/Cj0LcnHNhBjjvsarqrZ3hXfS9Fw6gdPG5OHX9pQ6OGfvdzq+vYIw0L5m5knU4dZt4J3L1Zdzp7OzBP4LcG868Q89GTURI3+BpjNuCkKEn/rK3AfEyjJFTf5bISDf7dx6xuwqT0ZxbEl6/En8zaxdLoXhNeGkzRqMtZNBTZkL77/YPWWHfJSuVNCfQbyV+EHmicxgD7jNaB7B7Oq/3m/yPQGw/mbm1JmtaUE+qQW49PI5T5yxvW93KvRtf+HLos2v4HdCJYbw==
//vuejs.org/guide/essentials/component-basics
const tabs = {
  AppList,
  AppProfile,
}
const currentTab = defineModel('currentTab', {
  default: { cuerentName: 'AppList', data: useGanresStore().ganreList },
})
function changeTab(curentTab) {}
// defineProps({
//   curentTab: {
//     type: String,
//     default: 'none',
//   },
// })
</script>
<style>
.account-section__tabs {
  background-color: red;
  padding: 64px 0;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 133%;
  color: #fff;
  display: flex;
  gap: 64px;
}
.profile__settings {
  display: flex;
  vertical-align: middle;
}
/* .tabs__favorite::before {
  content: url(../assets/sprite.svg#heart-icon);
  height: 24px;
  width: 24px;
} */
/* @/assets/sprite.svg#logo_w */
</style>
