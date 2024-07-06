import {createExample, createRouterObj, sortExamples} from "@/util.js";

const path = "/src/views/reactivity/";

const modules = import.meta.glob("/src/views/reactivity/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const fileNames = Object.keys(modules).map((key) => {
  // Extract the file name without the directory and extension
  return key.replace(path, "").replace(".vue", "");
});

let exampleList = fileNames.map((filename) => createExample(filename));

const orderedList = [
  "Reactive Primitives",
  "Reactive Objects",
  "Computed Ref"
]

exampleList = sortExamples(orderedList, exampleList);


export const ReactivityRouterList = fileNames.map((filename) =>
  createRouterObj(filename, modules, path),
);

export const ReactivityButtonExamples = {
  name: "Reactivity",
  examples: exampleList,
};
