import { createExample, createRouterObj } from "@/util.js";

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

const exampleList = fileNames.map((filename) => createExample(filename));

export const ReactivityList = fileNames.map((filename) =>
  createRouterObj(filename, modules, path),
);

export const ReactivityExamples = {
  name: "Reactivity2",
  examples: exampleList,
};
