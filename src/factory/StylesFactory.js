import {createExample, createRouterObj, createRouterObjAdvanced, sortExamples} from "@/util.js";

const path = "/src/views/styles/";

const modules = import.meta.glob("/src/views/styles/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const fileNames = Object.keys(modules).map((key) => {
  // Extract the file name without the directory and extension
  return key.replace(path, "").replace(".vue", "");
});

let exampleList = fileNames.map((filename) => createExample(filename));



let StyleRouterList = fileNames.map((filename) =>
  createRouterObj(filename, modules, path),
);


/**
 * ************************************* Custom Code *************************************
 */
const SCOPED_STYLES = "ScopedStyles";

exampleList = [
  ...exampleList,
  createExample(SCOPED_STYLES),
]

import ScopedStyles from "@/views/styles/scopedstyles/ScopedStyles.vue?raw";
import ScopedStylesChild from "@/views/styles/scopedstyles/ScopedStylesChild.vue?raw";
import {createReplComponent} from "@/ReplFactory.js";

const scopedStylesComponent = createReplComponent(ScopedStyles, {"ScopedStylesChild.vue": ScopedStylesChild})

StyleRouterList = [
  ...StyleRouterList,
  createRouterObjAdvanced(SCOPED_STYLES, scopedStylesComponent),
]
/**
 * ************************************* Custom Code *************************************
 */




const orderedList = [
  "Styling Basic",
  "Dynamic Class",
  "Dynamic Inline Styles",
  "Binding Array Of Styles",
  "Scoped Styles",
]

exampleList = sortExamples(orderedList, exampleList);


export const StyleButtonExamples = {
  name: "Styles",
  examples: exampleList,
};

export { StyleRouterList };
