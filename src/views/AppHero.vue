<template>
  <section class="hero-section">
    <div class="container hero__container">
      <div class="hero-card">
        <ul class="film-specification">
          <li class="film-specification__rating --green">
            <svg class="specification-rating__icon">
              <use xlink:href="@/assets/sprite.svg#star-icon"></use>
            </svg>
            7,5
          </li>
          <li class="film-specification__year">1979 Г.</li>
          <li class="film-specification__genre">детектив</li>
          <li class="film-specification__duration">1 ч 7 мин</li>
        </ul>
        <h2 class="hero-card__title">Шерлок Холмс и доктор Ватсон: Знакомство</h2>
        <p class="hero-card__description">
          Увлекательные приключения самого известного сыщика всех времен
        </p>
        <div class="hero-card__buttn-group">
          <button class="btn-primary">Трейлер</button>
          <button class="btn-primary">О фильме</button>
          <button class="circular-btn">
            <svg class="">
              <use xlink:href="@/assets/sprite.svg#heart-icon"></use>
            </svg>
          </button>

          <button class="circular-btn">
            <svg class="">
              <use xlink:href="@/assets/sprite.svg#reload-icon"></use>
            </svg>
          </button>
        </div>
      </div>
      <img class="hero-image" src="@/assets/caver.jpg" alt="film-image" />
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
  color: var(--transperant-grey);
}
.hero-image {
  border-radius: 16px;
  width: 680px;
  height: 552px;
  background-size: cover;
}
.hero-card {
  /* background-color: red; */
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
  display: flex;
  gap: 16px;
}
.film-specification {
  display: flex;
  gap: 16px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 133%;
  color: var(--transperant-grey);
  align-items: center;
}
.btn-primary {
  border: 1px solid var(--dark-border);
  border-radius: 28px;
  padding: 16px 48px;
  width: 183px;
  height: 56px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  background: var(--dark-grey);
}
.circular-btn {
  border: 1px solid var(--dark-border);
  border-radius: 28px;
  width: 68px;
  height: 56px;
  background: var(--dark-grey);
}
.film-specification__rating {
  border-radius: 16px;
  padding: 4px 12px;
  width: 70px;
  height: 32px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: var(--base-white);
  display: flex;
  justify-content: center;
  align-items: center;
}
.specification-rating__icon {
  width: 16px;
  height: 16px;
}
.--green {
  background-color: var(--base-green);
}
</style>
