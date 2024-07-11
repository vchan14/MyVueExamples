import {
  createExample,
  createRouterObj,
  createRouterObjAdvanced,
  extractUniqueFolderNames,
  organizeFilesByFolder,
  sortExamples,
} from "@/util.js";
import { createReplComponent } from "@/ReplFactory.js";

const path = "/src/views/others/";

// Import single file components
const singleFileComponents = import.meta.glob("/src/views/others/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

// Generate examples and router objects for single file components
let exampleList = Object.keys(singleFileComponents).map((key) => {
  const filename = key.replace(path, "").replace(".vue", "");
  return createExample(filename);
});

let othersRouterList = exampleList.map(({ name }) =>
  createRouterObj(name, singleFileComponents, path),
);

// Import components from folders
const folderComponents = import.meta.glob("/src/views/others/*/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

// Extract folder names and generate examples for them
const folderNames = extractUniqueFolderNames(folderComponents);
exampleList = [...exampleList, ...folderNames.map(createExample)];

// Organize folder components and generate router objects
const organizedFolders = organizeFilesByFolder(folderComponents);
Object.entries(organizedFolders).forEach(([folderName, folderFiles]) => {
  // Rename `${folderName}.vue` to `App.vue` if exists
  const folderVue = `${folderName}.vue`;
  if (folderFiles[folderVue]) {
    folderFiles["App.vue"] = folderFiles[folderVue];
    delete folderFiles[folderVue];
  }
  const component = createReplComponent(null, folderFiles);
  othersRouterList.push(createRouterObjAdvanced(folderName, component));
});

// Sort examples if needed
const orderedList = [];
exampleList = sortExamples(orderedList, exampleList);

export const OthersButtonExamples = {
  name: "Others",
  examples: exampleList,
  link: "https://vuejs.org/guide/essentials/class-and-style.html",
};

export { othersRouterList };
