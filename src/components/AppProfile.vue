<template>
  <!-- settings -->
  <ul data-tabs-target="profile" class="profile">
    <li class="profile__settings">
      <span class="avatar">av</span>
      <div class="profile-right">
        <span class="profile__subtitle">Имя Фамилия</span>
        <h3 class="profile__ttitle">Константин Константинопольский</h3>
      </div>
    </li>

    <li class="profile__settings">
      <span class="avatar">
        <svg>
          <use xlink:href="@/assets/sprite.svg#swoosh-email-icon"></use>
        </svg>
      </span>
      <div class="profile-right">
        <span class="profile__subtitle">Электронная почта</span>
        <h3 class="profile__ttitle">example@domain.com</h3>
      </div>
    </li>
  </ul>
</template>
<style>
.avatar {
  /* background-color: brown; */
  border-radius: 30px;
  width: 60px;
  height: 60px;
  fill: var(--base-white);
  background: var(--soft-grey);
  text-transform: uppercase;
  /* text-align: center;
  vertical-align: middle; */
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-right {
  padding-left: 14px;
}
.profile__settings {
  display: flex;
  align-items: center;
}
.profile {
  gap: 40px;
  display: flex;
  flex-direction: column;
}
.profile__subtitle {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--base-white);
}
.profile__ttitle {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  margin-top: 4px;
}
</style>
<script setup lang="ts">
defineOptions({
  name: 'app-profile',
})
</script>
