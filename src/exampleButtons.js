import { LifeCycleButtonExamples } from "@/factory/LifeCycleFactory.js";
import { ReactivityButtonExamples } from "@/factory/ReativityFactory.js";
import { IntroductionButtonExamples } from "@/factory/IntroductionFactory.js";
import { StyleButtonExamples } from "@/factory/StylesFactory.js";
import { RenderingButtonExamples } from "@/factory/RenderingFactory.js";
import { EventHandlingButtonExamples } from "@/factory/EventHandlingFactory.js";

const propExamples = {
  name: "Props",
  examples: [
    {
      name: "Declaring Props",
      path: "/declaringprops",
    },
    {
      name: "Default Values",
      path: "/defaultvalues",
    },
    {
      name: "Spread Props",
      path: "/spreadprops",
    },
  ],
};

const eventsExamples = {
  name: "Events",
  examples: [
    {
      name: "Dom Events",
      path: "/domevents",
    },
    {
      name: "Inline Handlers",
      path: "/inlinehandlers",
    },
    {
      name: "Event Modifiers",
      path: "/eventmodifiers",
    },
    {
      name: "Component Events",
      path: "/componentevents",
    },
    {
      name: "Event Forwarding",
      path: "/eventforwarding",
    },
    {
      name: "Dom Event Forwarding",
      path: "/domeventforwarding",
    },
  ],
};

const bindingExamples = {
  name: "Bindings",
  examples: [
    {
      name: "Canvas Binding",
      path: "/canvasbinding",
    },
    {
      name: "Checkbox Input",
      path: "/checkboxinput",
    },
    {
      name: "Component Binding",
      path: "/componentbinding",
    },
    {
      name: "Dimensions",
      path: "/dimensions",
    },
    {
      name: "Each Block Binding",
      path: "/eachblockbinding",
    },
    {
      name: "File Inputs",
      path: "/fileinputs",
    },
    {
      name: "Group Inputs",
      path: "/groupinputs",
    },
    {
      name: "Media Element",
      path: "/mediaelement",
    },
    {
      name: "Numeric Input",
      path: "/numericinput",
    },
    {
      name: "Select Binding",
      path: "/selectbinding",
    },
    {
      name: "Select Multiple",
      path: "/selectmultiple",
    },
    {
      name: "Text Area Input",
      path: "/textareainput",
    },
    {
      name: "Text Input",
      path: "/textinput",
    },
  ],
};

export const ALL_EXAMPLES = [
  IntroductionButtonExamples,
  ReactivityButtonExamples,
  StyleButtonExamples,
  RenderingButtonExamples,
  EventHandlingButtonExamples,
  propExamples,
  eventsExamples,
  bindingExamples,
  LifeCycleButtonExamples,
];
