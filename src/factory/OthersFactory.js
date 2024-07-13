const orderedList = [];

import { generateButtonExamplesAndRouterList } from "@/factoryUtil.js";

const path = "/src/views/styles/";
const sectionName = "Others";
const link = "https://vuejs.org/guide/essentials/class-and-style.html";

const singleFileComponents = import.meta.glob("/src/views/others/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const folderComponents = import.meta.glob("/src/views/others/*/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const { ButtonExamples: OthersButtonExamples, RouterList: othersRouterList } =
  generateButtonExamplesAndRouterList(
    path,
    singleFileComponents,
    folderComponents,
    sectionName,
    link,
    orderedList,
  );

export { OthersButtonExamples, othersRouterList };
