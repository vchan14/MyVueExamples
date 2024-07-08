import { createExample, createRouterObj, sortExamples } from "@/util.js";

const path = "/src/views/rendering/";

const modules = import.meta.glob("/src/views/rendering/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

// Extract the file name without the directory and extension
const fileNames = Object.keys(modules).map((key) =>
  key.replace(path, "").replace(".vue", ""),
);

let exampleList = fileNames.map((filename) => createExample(filename));

let RenderingRouterList = fileNames.map((filename) =>
  createRouterObj(filename, modules, path),
);

const orderedList = [
  "If Conditional",
  "Else If And Else Conditional",
  "V Show Directive",
  "List Rendering",
];

// // write a util method given to sort exampleList based on orderedList
exampleList = sortExamples(orderedList, exampleList);

export const RenderingButtonExamples = {
  name: "Rendering",
  examples: exampleList,
};

export { RenderingRouterList };
