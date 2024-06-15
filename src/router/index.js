import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: () => import('@/views/introduction/helloworld/HelloWorld.vue')
    },
    {
      path: '/dynamicattributes',
      name: 'dynamicattributes',
      component: () => import('@/views/introduction/dynamicattributes/DynamicAttributes.vue')
    },
    {
      path: '/styling',
      name: 'styling',
        component: () => import('@/views/introduction/styling/StylingView.vue')
    },
    {
      path: '/nestedcomponents',
        name: 'nestedcomponents',
        component: () => import('@/views/introduction/nestedcomponents/NestedComponentsView.vue')
    },
    {
      path: '/htmldirective',
      name: 'htmldirective',
        component: () => import('@/views/introduction/htmldirective/HtmlDirectiveView.vue')
    },
    {
      path: '/reactivityassignment',
      name: 'reactivityassignment',
      component: () => import('@/views/reactivity/ReactivityAssignmentView.vue')
    }
  ]
})

export default router
