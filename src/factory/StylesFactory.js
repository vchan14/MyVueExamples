const orderedList = [
  "Styling Basic",
  "Dynamic Class",
  "Dynamic Inline Styles",
  "Binding Array Of Styles",
  "Scoped Styles",
];

import { generateButtonExamplesAndRouterList } from "@/factoryUtil.js";

const path = "/src/views/styles/";
const sectionName = "Styles";
const link = "https://vuejs.org/guide/essentials/class-and-style.html";

const singleFileComponents = import.meta.glob("/src/views/styles/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const folderComponents = import.meta.glob("/src/views/styles/*/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const { ButtonExamples: StyleButtonExamples, RouterList: StyleRouterList } =
  generateButtonExamplesAndRouterList(
    path,
    singleFileComponents,
    folderComponents,
    sectionName,
    link,
    orderedList,
  );

export { StyleButtonExamples, StyleRouterList };
