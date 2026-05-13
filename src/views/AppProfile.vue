<template>
  <section class="account-section container">
    <h2 class="section-title">Мой аккаунт</h2>
    <ul class="account-section__tabs tabs">
      <li class="tabs__favorite">
        <svg><use xlink:href="@/assets/sprite.svg#heart-icon"></use></svg> Избранные фильм
      </li>
      <li class="tabs__settings">Настройка аккаунта</li>
    </ul>

    <!-- favorite -->

    <!-- <ul class="rating-list">
      <li class="rating-list__item">
        <span class="rating-list__rate">1</span>
        <a href="#film" class=""></a>
      </li>
      <li class="rating-list__item">
        <span class="rating-list__rate">2</span>
        <a href="#film" class=""></a>
      </li>
      <li class="rating-list__item">
        <span class="rating-list__rate">3</span>
        <a href="#film" class=""></a>
      </li>
      <li class="rating-list__item">
        <span class="rating-list__rate">4</span>
        <a href="#film" class=""></a>
      </li>
      <li class="rating-list__item">
        <span class="rating-list__rate">5</span>
        <a href="#film" class=""></a>
      </li>
      <li class="rating-list__item">
        <span class="rating-list__rate">6</span>
        <a href="#film" class=""></a>
      </li>
      <li class="rating-list__item">
        <span class="rating-list__rate">7</span>
        <a href="#film" class=""></a>
      </li>
      <li class="rating-list__item">
        <span class="rating-list__rate">8</span>
        <a href="#film" class=""></a>
      </li>
      <li class="rating-list__item">
        <span class="rating-list__rate">9</span>
        <a href="#film" class=""></a>
      </li>
      <li class="rating-list__item">
        <span class="rating-list__rate">10</span>
        <a href="#film" class=""></a>
      </li>
    </ul> -->
    <!-- favorite -->

    <!-- settings -->
    <ul class="profile">
      <li class="profile__settings">
        <span>avatar</span>
        <div class="profile-right">
          <span class="profile__subtitle">Имя Фамилия</span>
          <h3 class="profile__ttitle">Константин Константинопольский</h3>
        </div>
      </li>

      <li class="">
        <span>avatar</span>
        <div class="profile-right">
          <span class="profile__subtitle">Имя Фамилия</span>
          <h3 class="profile__ttitle">Константин Константинопольский</h3>
        </div>
      </li>
    </ul>
    <button class="button">Выйти из аккаунта</button>
  </section>
</template>
<script setup lang="ts">
import { useGanresStore } from '@/stores/ganreStore'
import AppList from '../components/AppList.vue'
const ganreStore = useGanresStore()
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
