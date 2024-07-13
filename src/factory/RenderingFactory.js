const orderedList = [
  "If Conditional",
  "Else If And Else Conditional",
  "V Show Directive",
  "List Rendering",
];

import { generateButtonExamplesAndRouterList } from "@/factoryUtil.js";

const path = "/src/views/rendering/";
const sectionName = "Rendering";
const link = "https://vuejs.org/guide/essentials/conditional.html";

const singleFileComponents = import.meta.glob("/src/views/rendering/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const folderComponents = import.meta.glob("/src/views/rendering/*/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const {
  ButtonExamples: RenderingButtonExamples,
  RouterList: RenderingRouterList,
} = generateButtonExamplesAndRouterList(
  path,
  singleFileComponents,
  folderComponents,
  sectionName,
  link,
  orderedList,
);

export { RenderingButtonExamples, RenderingRouterList };
