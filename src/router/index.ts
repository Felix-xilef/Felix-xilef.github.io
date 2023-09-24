import { createRouter, createWebHistory } from 'vue-router'
import { RouteName } from './route-name.enum'

export default createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL,
  ),

  routes: [
    {
      path: '/',
      name: RouteName.HOME,
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/curriculum',
      name: RouteName.CURRICULUM,
      component: () => import('../views/CurriculumView.vue'),
    },
    {
      path: '/favicon.svg',
      component: () => import('../../public/favicon.svg'),
    },
    {
      path: '/:anything*',
      redirect: {
        name: RouteName.HOME,
      },
    },
  ]
});
