import {createRouter, createWebHistory} from "vue-router";
import {
  AwaitBlocksVue,
  ComponentEventsVue,
  DeclaringPropsVue,
  DefaultValuesVue,
  DomEventForwardingVue,
  DomEventViewVue,
  EachBlocksVue,
  ElseBlocksVue,
  ElseIfBlocksVue,
  EventForwardingVue,
  EventModifiersVue,
  IfBlocksVue,
  InlineHandlersVue,
  KeyedEachBlocksVue,
  SpreadPropsVue,
} from "@/ReplFactory.js";
import {
  CanvasBindingVue,
  CheckBoxInputVue,
  ComponentBindingVue,
  DimensionsVue,
  EachBlockBindingVue,
  FileInputsVue,
  GroupInputsVue,
  MediaElementVue,
  NumericInputVue,
  SelectBindingVue,
  SelectMultipleVue,
  TextAreaInputVue,
  TextInputVue,
} from "@/replfactory/BindingFactory.js";
import {LifeCycleRouterList} from "@/factory/LifeCycleFactory.js";
import {ReactivityRouterList} from "@/factory/ReativityFactory.js";
import {IntroductionRouterList} from "@/factory/IntroductionFactory.js";
import {StyleRouterList} from "@/factory/StylesFactory.js";
import {RenderingRouterList} from "@/factory/RenderingFactory.js";
import {EventHandlingRouterList} from "@/factory/EventHandlingFactory.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/helloworld",
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
    {
      path: "/canvasbinding",
      name: "canvasbinding",
      component: CanvasBindingVue,
    },
    {
      path: "/checkboxinput",
      name: "checkboxinput",
      component: CheckBoxInputVue,
    },
    {
      path: "/componentbinding",
      name: "componentbinding",
      component: ComponentBindingVue,
    },
    {
      path: "/dimensions",
      name: "dimensions",
      component: DimensionsVue,
    },
    {
      path: "/eachblockbinding",
      name: "eachblockbinding",
      component: EachBlockBindingVue,
    },
    {
      path: "/fileinputs",
      name: "fileinputs",
      component: FileInputsVue,
    },
    {
      path: "/groupinputs",
      name: "groupinputs",
      component: GroupInputsVue,
    },
    {
      path: "/mediaelement",
      name: "mediaelement",
      component: MediaElementVue,
    },
    {
      path: "/numericinput",
      name: "numericinput",
      component: NumericInputVue,
    },
    {
      path: "/selectbinding",
      name: "selectbinding",
      component: SelectBindingVue,
    },
    {
      path: "/selectmultiple",
      name: "selectmultiple",
      component: SelectMultipleVue,
    },
    {
      path: "/textareainput",
      name: "textareainput",
      component: TextAreaInputVue,
    },
    {
      path: "/textinput",
      name: "textinput",
      component: TextInputVue,
    },
    ...IntroductionRouterList,
    ...ReactivityRouterList,
    ...StyleRouterList,
    ...RenderingRouterList,
    ...LifeCycleRouterList,
    ...EventHandlingRouterList,

  ],
});

export default router;
