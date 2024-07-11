import { generateButtonExamplesAndRouterList } from "@/factoryUtil.js";

const path = "/src/views/props/";
const sectionName = "Props";
const link = "https://vuejs.org/guide/components/props.html";

const singleFileComponents = import.meta.glob("/src/views/props/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const folderComponents = import.meta.glob("/src/views/props/*/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const { ButtonExamples: PropsButtonExamples, RouterList: PropsRouterList } =
  generateButtonExamplesAndRouterList(
    path,
    singleFileComponents,
    folderComponents,
    sectionName,
    link,
  );

export { PropsButtonExamples, PropsRouterList };
