const orderedList = [];

import { generateButtonExamplesAndRouterList } from "@/factoryUtil.js";

const path = "/src/views/basic/";
const sectionName = "Basic";
const link = "https://vuejs.org/guide/introduction.html";

const singleFileComponents = import.meta.glob("/src/views/basic/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const folderComponents = import.meta.glob("/src/views/basic/*/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const { ButtonExamples: BasicButtonExamples, RouterList: BasicRouterList } =
  generateButtonExamplesAndRouterList(
    path,
    singleFileComponents,
    folderComponents,
    sectionName,
    link,
    orderedList,
  );

export { BasicButtonExamples, BasicRouterList };
