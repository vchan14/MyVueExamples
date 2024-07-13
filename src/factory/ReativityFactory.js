const orderedList = ["Reactive Primitives", "Reactive Objects", "Computed Ref"];

import { generateButtonExamplesAndRouterList } from "@/factoryUtil.js";

const path = "/src/views/reactivity/";
const sectionName = "Reactivity";
const link = "https://vuejs.org/guide/essentials/reactivity-fundamentals.html";

const singleFileComponents = import.meta.glob("/src/views/reactivity/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const folderComponents = import.meta.glob("/src/views/reactivity/*/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const {
  ButtonExamples: ReactivityButtonExamples,
  RouterList: ReactivityRouterList,
} = generateButtonExamplesAndRouterList(
  path,
  singleFileComponents,
  folderComponents,
  sectionName,
  link,
  orderedList,
);

export { ReactivityButtonExamples, ReactivityRouterList };
