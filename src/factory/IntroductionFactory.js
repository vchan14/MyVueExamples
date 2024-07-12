import { generateButtonExamplesAndRouterList } from "@/factoryUtil.js";


const orderedList = [
  "Hello World",
  "Raw Html",
  "Dynamic Attributes",
  "Text Input",
  "Checkbox Input",
  "Numeric Input",
];

const path = "/src/views/introduction/";
const sectionName = "Introduction";
const link = "https://vuejs.org/guide/essentials/template-syntax.html";

const singleFileComponents = import.meta.glob("/src/views/introduction/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const folderComponents = import.meta.glob("/src/views/introduction/*/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const { ButtonExamples: IntroductionButtonExamples, RouterList: IntroductionRouterList } =
  generateButtonExamplesAndRouterList(
    path,
    singleFileComponents,
    folderComponents,
    sectionName,
    link,
    orderedList,
  );


console.log(IntroductionButtonExamples, IntroductionRouterList);
export { IntroductionButtonExamples, IntroductionRouterList };

