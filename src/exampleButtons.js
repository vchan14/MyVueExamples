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


export const ALL_EXAMPLES = [
  IntroductionButtonExamples,
  ReactivityButtonExamples,
  StyleButtonExamples,
  RenderingButtonExamples,
  EventHandlingButtonExamples,
  propExamples,
];
