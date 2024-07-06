import {createExample, createRouterObj, createRouterObjAdvanced, sortExamples} from "@/util.js";
import {createReplComponent} from "@/ReplFactory.js";

const path = "/src/views/introduction/";

const modules = import.meta.glob("/src/views/introduction/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

// Extract the file name without the directory and extension
const fileNames = Object.keys(modules).map(key => key.replace(path, "").replace(".vue", ""));

let exampleList = fileNames.map(filename => createExample(filename));

let IntroductionRouterList = fileNames.map(filename => createRouterObj(filename, modules, path));

const orderedList = [
  "Hello World",
  "Raw Html",
  "Dynamic Attributes",
  "Styling Basic",
  "Scoped Styles",
];

// write a util method given to sort exampleList based on orderedList

exampleList = sortExamples(orderedList, exampleList);

export const IntroductionButtonExamples = {
  name: "Introduction",
  examples: exampleList,
};


export { IntroductionRouterList };