<template>
  <header class="header">
    <div class="container header__container">
      <svg class="header__logo">
        <use xlink:href="@/assets/sprite.svg#logo_w"></use>
      </svg>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li><a href="#">Главная</a></li>
          <li><a href="#">Жанры</a></li>
        </ul>
      </nav>

      <input class="header__search" type="text" placeholder="поиск" />
      <button class="header__profile">Войти</button>
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
.header__nav {
  font-family: var(--second-family);
}
</style>
