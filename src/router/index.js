import { createRouter, createWebHistory } from "vue-router";
import { ReactivityRouterList } from "@/factory/ReativityFactory.js";
import { IntroductionRouterList } from "@/factory/IntroductionFactory.js";
import { StyleRouterList } from "@/factory/StylesFactory.js";
import { RenderingRouterList } from "@/factory/RenderingFactory.js";
import TestView from "@/views/TestView.vue";
// import { othersRouterList } from "@/factory/OthersFactory.js";
import { PropsRouterList } from "@/factory/PropsFactory.js";
import {EventHandlingRouterList} from "@/factory/EventHandlingFactory.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/HelloWorld",
    },
    {
      path: "/test",
      name: "testme",
      component: TestView,
    },

    ...IntroductionRouterList,
    ...ReactivityRouterList,
    ...StyleRouterList,
    ...RenderingRouterList,
    ...EventHandlingRouterList,
    ...PropsRouterList,
    // ...othersRouterList,
  ],
});

export default router;
