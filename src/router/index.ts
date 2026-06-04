import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/views/AppHome.vue'
import AppGenres from '@/views/AppGenres.vue'
import AppGenre from '@/views/AppGenre.vue'
import AppAccount from '@/views/AppAccount.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
      // component: AppFilm,
    },
    {
      path: '/genres',
      name: 'genres',
      component: AppGenres,
      // component: AppFilm,
    },
    {
      path: '/genres/:code',
      name: 'genre',
      component: AppGenre,
    },
    {
      path: '/profile/',
      name: 'profile',
      component: AppAccount,
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
