import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/EventsView.vue';
import { useLocalStorage } from '@/utils/useLocal';
import type { Auth } from '@/interfaces/AuthInterface';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/events',
    },
    {
      path: '/events',
      name: 'events',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/events/:id/edit',
      name: 'event',
      component: () => import('../views/EventsEditView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/events/create',
      name: 'event-create',
      component: () => import('../views/EventsCreateView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/events/:id/participants',
      name: 'participants',
      component: () => import('../views/ParticipantsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/participants/create',
      name: 'participant-create',
      component: () => import('../views/ParticipantsCreateView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/LogoutView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const auth = useLocalStorage<Auth>('auth', { loggedIn: false });

    if (!auth.value.loggedIn) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
