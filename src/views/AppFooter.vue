<template>
  <footer class="footer">
    <div class="container footer__container">
      <ul class="footer__contacts">
        <li>
          <a href="http://">
            <svg class="icon">
              <use class="icon" xlink:href="@/assets/sprite.svg#vk-icon"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="http://">
            <svg class="icon">
              <use xlink:href="@/assets/sprite.svg#yt-icon"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="http://"
            ><svg class="icon">
              <use xlink:href="@/assets/sprite.svg#ok-icon"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="http://">
            <svg class="icon">
              <use xlink:href="@/assets/sprite.svg#tg_footer"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style>
.icon {
  fill: none;
  width: 36px;
  height: 36px;
}
.footer {
  padding: 40px 80px;
}
.footer__container {
  display: flex;
  justify-content: flex-end;
}
.footer__contacts {
  display: flex;
  gap: 24px;
}
</style>
