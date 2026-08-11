<template>
  <section class="account-section container">
    <h2 class="section-title">Мой аккаунт</h2>

    <ul class="account-section__tabs tabs">
      <button
        :class="{ 'active-tab': activeTab == 'app-list' }"
        class="tabs__favorite"
        data-tabs-path="favorite"
        @click="currentTab = tabs.favorite"
      >
        <svg><use xlink:href="@/assets/sprite.svg#heart-icon"></use></svg> Избранные фильм
      </button>
      <button
        :class="{ 'active-tab': activeTab == 'app-profile' }"
        class="tabs__settings"
        data-tabs-path="profile"
        @click="currentTab = tabs.profile"
      >
        <svg><use xlink:href="@/assets/sprite.svg#person-icon"></use></svg> Настройка аккаунта
      </button>
    </ul>
    <component :is="currentTab.component" class="tab-content" v-bind="currentTab.props"></component>

    <button class="account-section__button">Выйти из аккаунта</button>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import AppProfile from '@/components/AppProfile.vue'
import AppList from '../components/AppList.vue'
import { useTopMoveStore } from '@/stores/topMoveStore'
const topMoveieStore = useTopMoveStore()

const tabs = {
  favorite: {
    component: AppList,
    props: {
      'list-type': '2',
      list: topMoveieStore.getTopMoveie,
    },
  },
  profile: {
    component: AppProfile,
    props: {},
  },
}
const currentTab = ref(tabs.profile)

const activeTab = computed(() => {
  return currentTab.value.component.name
})
</script>
<style>
.account-section__tabs {
  /* background-color: red; */
  padding: 64px 0;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24px;

  /* line-height: 133%; */
  color: #fff;
  display: flex;
  gap: 64px;
}
.account-section__button {
  border-radius: 28px;
  padding: 16px 48px;
  width: 262px;
  height: 56px;
  background: #67a5eb;
  backdrop-filter: blur(20px);
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  /* line-height: 133%; */
  color: var(--base-white);
}
.tabs__settings,
.account-section__tabs {
  fill: var(--base-white);
}
.tab-content {
  padding-top: 64px;
  padding-bottom: 64px;
}
/* .tabs__favorite::before {
  content: url(../assets/sprite.svg#heart-icon);
  height: 24px;
  width: 24px;
} */
/* @/assets/sprite.svg#logo_w */
</style>
