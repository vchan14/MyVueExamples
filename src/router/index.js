import {createRouter, createWebHistory} from "vue-router";
import {DeclaringPropsVue, DefaultValuesVue, SpreadPropsVue,} from "@/ReplFactory.js";
import {ReactivityRouterList} from "@/factory/ReativityFactory.js";
import {IntroductionRouterList} from "@/factory/IntroductionFactory.js";
import {StyleRouterList} from "@/factory/StylesFactory.js";
import {RenderingRouterList} from "@/factory/RenderingFactory.js";
import {EventHandlingRouterList} from "@/factory/EventHandlingFactory.js";
import TestView from "@/views/TestView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/HelloWorld",
    },
    {
      path: "/declaringprops",
      name: "declaringprops",
      component: DeclaringPropsVue,
    },
    {
      path: "/defaultvalues",
      name: "defaultvalues",
      component: DefaultValuesVue,
    },
    {
      path: "/spreadprops",
      name: "spreadprops",
      component: SpreadPropsVue,
    },
    {
      path: "/test",
      name: "testme",
      component: TestView
    },

    ...IntroductionRouterList,
    ...ReactivityRouterList,
    ...StyleRouterList,
    ...RenderingRouterList,
    ...EventHandlingRouterList,
  ],
});

export default router;
