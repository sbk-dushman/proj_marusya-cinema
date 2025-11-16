<template>
  <ul class="film-list">
    <li class="film-list__item">
      <span class="film-list__rate">1</span>
      <a href="#film" class=""></a>
    </li>
    <li class="film-list__item">
      <span class="film-list__rate">2</span>
      <a href="#film" class=""></a>
    </li>
    <li class="film-list__item">
      <span class="film-list__rate">3</span>
      <a href="#film" class=""></a>
    </li>
    <li class="film-list__item">
      <span class="film-list__rate">4</span>
      <a href="#film" class=""></a>
    </li>
    <li class="film-list__item">
      <span class="film-list__rate">5</span>
      <a href="#film" class=""></a>
    </li>
    <li class="film-list__item">
      <span class="film-list__rate">6</span>
      <a href="#film" class=""></a>
    </li>
    <li class="film-list__item">
      <span class="film-list__rate">7</span>
      <a href="#film" class=""></a>
    </li>
    <li class="film-list__item">
      <span class="film-list__rate">8</span>
      <a href="#film" class=""></a>
    </li>
    <li class="film-list__item">
      <span class="film-list__rate">9</span>
      <a href="#film" class=""></a>
    </li>
    <li class="film-list__item">
      <span class="film-list__rate">10</span>
      <a href="#film" class=""></a>
    </li>
  </ul>
</template>

<style>
/* TO DO
1. СДЕЛАТЬ 2 ВЕРСИЮ КАРТОЧЕК
2. РАБОЧИЕ ССЫЛКИ  И РОУТЫ НА ФИЛЬМЫ


*/
.film-list {
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  gap: 64px 40px;
}
.film-list__item {
  background-image: url('@/assets/top.png');
  width: 224px;
  height: 336px;
  background-size: cover;
  background-position: center;
  position: relative;
}
.film-list__rate {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 8px 8px;
  width: 62px;
  height: 48px;

  background-color: var(--base-white);
  position: absolute;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: var(--base-purple);
  top: -14px;
  left: -17px;
}
</style>
