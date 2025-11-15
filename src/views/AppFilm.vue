<template>
  <AppHero />
  <section class="film-section">
    <div class="container">
      <h2 class="section-title film-title">О фильме</h2>
    </div>
    <div class="container film-container">
      <ul class="film-descrption">
        <li class="film-descrption__item">
          <span class="film-descrption___property">Язык оригинала</span>
          <span class="film-descrption___value">Русский</span>
        </li>
        <li class="film-descrption__item">
          <span class="film-descrption___property">Бюджет</span>
          <span class="film-descrption___value">250 000 руб.</span>
        </li>
        <li class="film-descrption__item">
          <span class="film-descrption___property">Выручка</span>
          <span class="film-descrption___value">2 835 000 руб.</span>
        </li>
        <li class="film-descrption__item">
          <span class="film-descrption___property">Режиссёр</span>
          <span class="film-descrption___value">Игорь Масленников</span>
        </li>
        <li class="film-descrption__item">
          <span class="film-descrption___property">Продакшен</span>
          <span class="film-descrption___value">Ленфильм</span>
        </li>
        <li class="film-descrption__item">
          <span class="film-descrption___property">Награды</span>
          <span class="film-descrption___value">Топ-250, 33 место</span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
import AppHero from './AppHero.vue'
</script>

<style>
.film-title {
  padding-bottom: 64px;
  padding-top: 40px;
  padding-left: 80px;
  padding-right: 80px;
}
.film-container {
  padding: 40px 80px 120px 80px;
}
.film-descrption__item {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 133%;
  color: var(--base-white);
}
.film-descrption___property:after {
  content: ' ';
  /* padding-left: 20rem; */
  border-bottom: 1px dashed var(--transperant-grey);
  margin: 0 8px;
}
.film-descrption___property:first-child::after {
  padding-left: 185px;
}
.film-descrption___property:nth-child(2)::after {
  padding-left: 252px;
}
.film-descrption___property:nth-child(3)::after {
  padding-left: 249px;
}
.film-descrption___property:nth-child(4)::after {
  padding-left: 239px;
}
.film-descrption___property:nth-child(5)::after {
  padding-left: 223px;
}
.film-descrption___property:last-child::after {
  padding-left: 239px;
}

.film-descrption {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.film-descrption__item {
  display: flex;
}
</style>
