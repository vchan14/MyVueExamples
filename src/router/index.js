import { createRouter, createWebHistory } from 'vue-router'
import {
  DeclaringPropsVue,
  DefaultValuesVue,
  DynamicAttributesVue,
  HelloWorldVue,
  HtmlDirectiveVue,
  NestedComponentsVue,
  ReactivityAssignmentVue,
  ReactivityDeclarationVue,
  ReactivityStatementsVue,
  SpreadPropsVue,
  StylingVue
} from '@/ReplFactory.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorldVue
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue')
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorldVue
    },
    {
      path: '/dynamicattributes',
      name: 'dynamicattributes',
      component: DynamicAttributesVue
    },
    {
      path: '/styling',
      name: 'styling',
      component: StylingVue
    },
    {
      path: '/nestedcomponents',
      name: 'nestedcomponents',
      component: NestedComponentsVue
    },
    {
      path: '/htmldirective',
      name: 'htmldirective',
      component: HtmlDirectiveVue
    },
    {
      path: '/reactivityassignment',
      name: 'reactivityassignment',
      component: ReactivityAssignmentVue
    },
    {
      path: '/reactivedeclaration',
      name: 'reactivedeclaration',
      component: ReactivityDeclarationVue
    },
    {
      path: '/reactivestatements',
      name: 'reactivestatements',
      component: ReactivityStatementsVue
    },
    {
      path: '/declaringprops',
      name: 'declaringprops',
      component: DeclaringPropsVue
    },
    {
      path: '/defaultvalues',
      name: 'defaultvalues',
      component: DefaultValuesVue
    },
    {
      path: '/spreadprops',
      name: 'spreadprops',
      component: SpreadPropsVue
    }
  ]
})

export default router
