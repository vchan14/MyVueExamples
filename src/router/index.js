import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {
    DynamicAttributesVue, HelloWorldVue,
    HtmlDirectiveVue,
    NestedComponentsVue, ReactivityAssignmentVue,
    StylingVue
} from "@/components/ReplFactory.js";

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
        }
    ]
})

export default router
