import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/main'),
      },
      {
        path: '/pins/:id',
        name: 'pins',
        component: () => import('@/views/pins'),
      },
    ],
  },
]
export default routes
