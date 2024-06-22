import { createRouter, createWebHistory } from "vue-router";
import {
  AwaitBlocksVue,
  ComponentEventsVue,
  DeclaringPropsVue,
  DefaultValuesVue,
  DomEventForwardingVue,
  DomEventViewVue,
  DynamicAttributesVue,
  EachBlocksVue,
  ElseBlocksVue,
  ElseIfBlocksVue,
  EventForwardingVue,
  EventModifiersVue,
  HelloWorldVue,
  HtmlDirectiveVue,
  IfBlocksVue,
  InlineHandlersVue,
  KeyedEachBlocksVue,
  NestedComponentsVue,
  ReactivityAssignmentVue,
  ReactivityDeclarationVue,
  ReactivityStatementsVue,
  SpreadPropsVue,
  StylingVue,
} from "@/ReplFactory.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HelloWorldVue,
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/TestView.vue"),
    },
    {
      path: "/helloworld",
      name: "helloworld",
      component: HelloWorldVue,
    },
    {
      path: "/dynamicattributes",
      name: "dynamicattributes",
      component: DynamicAttributesVue,
    },
    {
      path: "/styling",
      name: "styling",
      component: StylingVue,
    },
    {
      path: "/nestedcomponents",
      name: "nestedcomponents",
      component: NestedComponentsVue,
    },
    {
      path: "/htmldirective",
      name: "htmldirective",
      component: HtmlDirectiveVue,
    },
    {
      path: "/reactivityassignment",
      name: "reactivityassignment",
      component: ReactivityAssignmentVue,
    },
    {
      path: "/reactivedeclaration",
      name: "reactivedeclaration",
      component: ReactivityDeclarationVue,
    },
    {
      path: "/reactivestatements",
      name: "reactivestatements",
      component: ReactivityStatementsVue,
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
      path: "/ifblocks",
      name: "ifblocks",
      component: IfBlocksVue,
    },
    {
      path: "/elseifblocks",
      name: "elseifblocks",
      component: ElseIfBlocksVue,
    },
    {
      path: "/elseblocks",
      name: "elseblocks",
      component: ElseBlocksVue,
    },
    {
      path: "/eachblocks",
      name: "eachblocks",
      component: EachBlocksVue,
    },
    {
      path: "/keyedeachblocks",
      name: "keyedeachblocks",
      component: KeyedEachBlocksVue,
    },
    {
      path: "/awaitblocks",
      name: "awaitblocks",
      component: AwaitBlocksVue,
    },
    {
      path: "/domevents",
      name: "domevents",
      component: DomEventViewVue,
    },
    {
      path: "/inlinehandlers",
      name: "inlinehandlers",
      component: InlineHandlersVue,
    },
    {
      path: "/eventmodifiers",
      name: "eventmodifiers",
      component: EventModifiersVue,
    },
    {
      path: "/componentevents",
      name: "componentevents",
      component: ComponentEventsVue,
    },
    {
      path: "/eventforwarding",
      name: "eventforwarding",
      component: EventForwardingVue,
    },
    {
      path: "/domeventforwarding",
      name: "domeventforwarding",
      component: DomEventForwardingVue,
    },
  ],
});

export default router;
