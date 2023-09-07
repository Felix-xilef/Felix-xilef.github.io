import { createRouter, createWebHistory } from 'vue-router'
import { RouteName } from './route-name.enum'

export default createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL,
  ),

  routes: [
    {
      path: '/home',
      name: RouteName.HOME,
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/:anything*',
      redirect: {
        name: RouteName.HOME,
      },
    },
  ]
});
