<template>
  <section class="hero-section">
    <div class="container hero__container">
      <div class="hero-card">
        <!-- <ul class="film-specification">
          <li class="film-specification__rating">star 7,5</li>
          <li class="film-specification__year">1979 Г.</li>
          <li class="film-specification__genre">детектив</li>
          <li class="film-specification__duration">1 ч 7 мин</li>
        </ul> -->
        <h2 class="hero-card__title">Шерлок Холмс и доктор Ватсон: Знакомство</h2>
        <p class="hero-card__description">
          Увлекательные приключения самого известного сыщика всех времен
        </p>
        <div class="hero-card__buttn-group">
          <button class="button">Трейлер</button>
          <button class="button">О фильме</button>
          <button class="button"></button>
        </div>
      </div>
      <img class="hero-image" src="" alt="film-image" />
    </div>
  </section>
</template>

<style>
.hero-card__title {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 48px;
  line-height: 117%;
  padding-bottom: 16px;
}
.hero-card__description {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 133%;
}
.hero-image {
  border-radius: 16px;
  width: 680px;
  height: 552px;
  background-color: blue;
}
.hero-card {
  background-color: red;
  flex-direction: column;
  max-width: 600px;
  padding: 16px;
}
.hero__container {
  display: flex;
  align-items: center;
}
.hero-card__buttn-group {
  padding-top: 60px;
}
</style>
