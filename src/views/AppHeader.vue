<template>
  <header class="header">
    <div class="container header__container">
      <svg class="header__logo">
        <use xlink:href="@/assets/sprite.svg#logo_w"></use>
      </svg>
      <nav class="header__nav">
        <ul class="header-nav__list">
          <li class="nav-list__item"><a class="nav-list__link --current" href="#">Главная</a></li>
          <li class="nav-list__item"><a class="nav-list__link" href="#">Жанры</a></li>
        </ul>
      </nav>
      <label class="header-search__label" for="header__search">
        <svg class="header-search__icon">
          <use xlink:href="@/assets/sprite.svg#heart-icon"></use>
        </svg>
        <input class="header__search" type="text" id="header__search" placeholder="поиск" />
      </label>

      <button class="header__profile nav-list__link">Войти</button>
    </div>
  </header>
</template>

<style>
.header {
  padding: 24px 80px;
}
.header__logo {
  width: 134px;
  height: 32px;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-nav__list {
  display: flex;
  gap: 40px;
  color: var(--base-white);
}
.nav-list__link {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 133%;
  color: var(--base-white);
}
.--current {
  border-bottom: 1.5px solid var(--base-pink-under-line);
}
.header__search {
  border-radius: 8px;
  padding: 16px;
  width: 655px;
  height: 48px;
  text-transform: uppercase;
  padding: 12px 52px;
  background-color: var(--dark-grey);
  color: var(--soft-grey);
  outline: none;
}
.header-search__label {
  position: relative;
}
.header-search__icon {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 16px;
  top: 12px;

  fill: var(--soft-grey);
}
</style>
