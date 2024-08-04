import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import { nextTick } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/countries',
      name: 'countries',
      component: () => import('../views/CountriesView.vue')
    },
    {
      path: '/countries/:country',
      name: 'country',
      component: () => import('../views/CountryView.vue')
    },
    {
      path: '/countries/:country/:medal',
      name: ':country :medal',
      component: () => import('../views/CountryMedalView.vue')
    },
    {
      name: 'Disciplines',
      path: '/disciplines',
      component: () => import('../views/DisciplinesView.vue')
    },
    {
      path: '/disciplines/:discipline',
      name: 'Discipline',
      component: () => import('../views/DisciplineView.vue')
    },
    {
      name: 'Discipline country',
      path: '/disciplines/:discipline/:country',
      component: () => import('../views/DisciplineCountryView.vue')
    }
  ]
})

const DEFAULT_TITLE = 'Some Default Title';
router.beforeEach((to, from, next) => {
  nextTick(() => {
    document.title = to.name || DEFAULT_TITLE;
  });
  next();
})

export default router
