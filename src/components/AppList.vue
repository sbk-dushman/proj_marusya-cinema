<template>
  <ul class="ganer-list film-list">
    <!-- v-if="listType == 1" -->
    <li
      v-for="(movie, index) in list"
      :key="movie.id"
      :class="[listType == 1 ? 'ganer-list__item' : '']"
      class="film-list__item"
    >
      <span v-if="listType == 2" class="film-list__rate">{{ index == 0 ? 1 : index + 1 }}</span>
      <!-- <img class="ganer-list__cover" src="@/assets/Rectangle 1181.jpg" alt="" /> -->
      <img
        :class="[listType == 1 ? 'ganer-list__cover' : '', listType == 2 ? 'film-list__cover' : '']"
        :src="movie.posterUrl"
        alt=""
      />
      <RouterLink
        v-if="listType == 1"
        :to="`/genre/${movie}`"
        :class="[listType == 1 ? 'ganer-title' : '']"
        class="link"
        >{{ movie }}</RouterLink
      >

      <!-- <RouterLink :to="`/genre/${movie}`" class="link ganer-title">{{ movie }}</RouterLink> -->
    </li>
    <!-- <li
      v-for="movie in list"
      v-if="listType == 1"
      :key="movie.id"
      class="film-list__item ganer-list__item"
    > -->
    <!-- <span style="display: none" class="film-list__rate">1</span> -->
    <!-- <img class="ganer-list__cover" src="@/assets/Rectangle 1181.jpg" alt="" /> -->
    <!-- <img class="ganer-list__cover" :src="movie.posterUrl" alt="" /> -- -->
    <!-- <RouterLink class="nav-list__link" to="/genre/1">Главная</RouterLink> -->
    <!-- <RouterLink :to="`/genre/${movie}`" class="link ganer-title">{{ movie }}</RouterLink> -->
    <!-- </li> -->
    <!-- <li v-for="movie in list" v-if="listType == 2" class="film-list__item"> -->
    <!-- <span style="" class="film-list__rate">1</span> -->
    <!-- <img class="film-list__cover" src="@/assets/top.png" alt="" /> -->
    <!-- <img class="film-list__cover" :src="movie.posterUrl" alt="" /> -->
    <!-- <a href="#film " class="link">{{ movie }}</a> -->
    <!-- </li> -->

    <!-- <li class="film-list__item">
      <img class="film-list__cover" src="@/assets/top.png" alt="" />
      <a href="#film" class="film-list__rate">2</a>
    </li> -->
    <!-- <li class="film-list__item">
      <img class="film-list__cover" src="@/assets/top.png" alt="" />
      <a href="#film" class="film-list__rate">2</a>
    </li>
    <li class="film-list__item">
      <img class="film-list__cover" src="@/assets/top.png" alt="" />
      <a href="#film" class="film-list__rate">2</a>
    </li>
    <li class="film-list__item">
      <img class="film-list__cover" src="@/assets/top.png" alt="" />
      <a href="#film" class="film-list__rate">2</a>
    </li>
    <li class="film-list__item">
      <img class="film-list__cover" src="@/assets/top.png" alt="" />
      <a href="#film" class="film-list__rate">2</a>
    </li>
    <li class="film-list__item">
      <img class="film-list__cover" src="@/assets/top.png" alt="" />
      <a href="#film" class="film-list__rate">2</a>
    </li>
    <li class="film-list__item">
      <img class="film-list__cover" src="@/assets/top.png" alt="" />
      <a href="#film" class="film-list__rate">2</a>
    </li>
    <li class="film-list__item">
      <img class="film-list__cover" src="@/assets/top.png" alt="" />
      <a href="#film" class="film-list__rate">2</a>
    </li>
    <li class="film-list__item">
      <img class="film-list__cover" src="@/assets/top.png" alt="" />
      <a href="#film" class="film-list__rate">2</a>
    </li> -->
  </ul>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { TopMovieList } from '@/types'
import type { PropType } from 'vue'

defineProps({
  listType: {
    type: Number,
    default: 0,
  },
  list: {
    type: Array as PropType<TopMovieList[]>,
    default: null,
  },
  movie: {
    type: Object as PropType<TopMovieList>,
  },
})
</script>
<style>
.ganer-list {
}
.film-list,
.ganer-list {
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  gap: 64px 40px;
}
.film-list__item {
  width: 224px;
  height: 336px;
  display: flex;
}
.film-list__cover {
  width: 100%;
  height: 100%;
}
.link::after {
  position: absolute;
  top: 0;
  content: '';
  height: 100%;
}
.film-list__item,
.ganer-list__item {
  background-size: cover;
  background-position: center;
  position: relative;
}
.ganer-list__item {
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 24px;
  width: 290px;
  height: 304px;
  box-shadow: 0 0 80px 0 rgba(255, 255, 255, 0.33);
  background: #0a0b0b;
  flex-direction: column;
}
.ganer-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  text-align: center;
  color: #fff;

  padding: 22px 0;
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
.ganer-list__cover {
  width: 100%;
  width: 290px;
  height: 220px;
  border-radius: 24px 24px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.25);
}
</style>
