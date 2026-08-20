<template>
  <form class="login-form form" action="#">
    <button class="form__close" @click="$emit('someEvent')">
      <svg class="close-icon">
        <use xlink:href="@/assets/sprite.svg#close-icon"></use>
      </svg>
    </button>
    <span class="form-logo">
      <svg class="header__logo">
        <use xlink:href="@/assets/sprite.svg#logo-dark"></use>
      </svg>
    </span>
    <h2 class="form-title">Регистрация</h2>
    <!-- <p>Используйте вашу электронную почту для входа</p> -->
    <label v-for="(fild, id) in filds" :key="id" class="input-icon-container" for="form__email">
      <svg class="input-icon">
        <use :xlink:href="`/src/assets/sprite.svg#${fild.svgCode}`"></use>
      </svg>
      <input
        :class="fild.class"
        class="form_input"
        :type="fild.inputType"
        :placeholder="fild.fildPaceholder"
        :id="fild.inputId"
      />
    </label>
    <!-- <label class="input-icon-container" for="form__email">
      <svg class="input-icon">
        <use xlink:href="@/assets/sprite.svg#swoosh-email-icon"></use>
      </svg>
      <input
        class="form__email form_input"
        type="email"
        placeholder="Электронная почта"
        id="form__email"
      />
    </label> -->
    <!-- <label class="input-icon-container" for="form__first-name">
      <svg class="input-icon">
        <use xlink:href="@/assets/sprite.svg#person-icon"></use>
      </svg>
      <input
        class="form__first-name form_input"
        type="text"
        placeholder="Имя"
        id="form__first-name"
      />
    </label>

    <label class="input-icon-container" for="form__last-name">
      <svg class="input-icon">
        <use xlink:href="@/assets/sprite.svg#person-icon"></use>
      </svg>
      <input
        class="form__last-name form_input"
        type="text"
        placeholder="Фамилия"
        id="form__last-name"
      />
    </label>

    <label class="input-icon-container" for="form__password">
      <svg class="input-icon">
        <use xlink:href="@/assets/sprite.svg#key-icon"></use>
      </svg>
      <input
        class="form__password form_input"
        type="password"
        placeholder="Пароль"
        id="form__password"
      />
    </label>
    <label class="input-icon-container" for="form__password-confirm">
      <svg class="input-icon">
        <use xlink:href="@/assets/sprite.svg#key-icon"></use>
      </svg>
      <input
        class="form__password-confirm form_input"
        type="password"
        placeholder="Подтвердите пароль"
        id="form__password-confirm"
      />
    </label> -->
    <button class="form__btn" type="submit">Войти</button>
    <a class="form__sub-link" href="#/reg">Регистрация</a>
  </form>
</template>
<script setup lang="ts">
// import AppList from '../components/AppList.vue'
// import AppHero from '../components/AppHero.vue'
// import { useTopMoveStore } from '@/stores/topMoveStore'
// const topMoveieStore = useTopMoveStore()
import type { FormsType } from '@/types'
import type { PropType } from 'vue'
defineProps({
  form: {
    type: Number,
    default: 0,
  },
  filds: {
    type: Array as PropType<FormsType>,
    default: () => [
      {
        id: 1,
        inputId: 'form__email',
        fildPaceholder: 'Электронная почта',
        svgCode: 'swoosh-email-icon',
        class: 'form__email',
        inputType: 'email',
      },
      {
        inputId: 'form__email',
        fildPaceholder: 'Электронная почта',
        svgCode: 'swoosh-email-icon',
        class: 'form__email',
        inputType: 'email',
      },
    ],
  },
})
</script>
<style>
.form {
  background-color: var(--base-white);
  border-radius: 24px;
  padding: 64px 40px;
  max-width: 420px;
  max-height: 709px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
}
.form_input {
  border: 1px solid #00000066;
  border-radius: 8px;
  padding: 16px;
  width: 340px;
  height: 56px;
  position: relative;
  padding-left: 52px;
  color: rgba(0, 0, 0, 0.4);
}
.input-icon {
  position: absolute;
  fill: #00000066;
  color: none;
  z-index: 10;
  top: 16px;
  left: 16px;
}
.input-icon-container {
  position: relative;
}
.form-title,
.form__sub-link {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: #000;
}
.form__close {
  border-radius: 24px;
  width: 48px;
  height: 48px;
  background-color: var(--base-white);
  position: absolute;
  right: -64px;
  top: 0;
}
.form__btn {
  border-radius: 28px;
  padding: 16px 48px;
  width: 340px;
  height: 56px;
  background: #67a5eb;
  color: var(--base-white);
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  margin-top: 34px;
  margin-bottom: 24px;
}
.form__sub-link {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: var(--base-black);
}
.close-icon {
  fill: var(--base-black);
}
</style>
