import {
  createExample,
  createRouterObj,
  createRouterObjAdvanced,
  extractUniqueFolderNames,
  organizeFilesByFolder,
  sortExamples,
} from "@/util.js";
import { createReplComponent } from "@/ReplFactory.js";

/**
 * Generates button examples and router list for a given path.
 *
 * @param {string} basePath - The base path to the Vue components.
 * @param {string[]} orderedList - An optional array to sort the examples.
 * @param {string} sectionName - The name of the section.
 * @returns {{ ButtonExamples: Object, RouterList: Object[] }}
 */
export function generateButtonExamplesAndRouterList(
  basePath,
  singleFileComponents,
  folderComponents,
  sectionName,
  link,
  orderedList = [],
) {
  // Generate examples and router objects for single file components
  let exampleList = Object.keys(singleFileComponents).map((key) => {
    const filename = key.replace(basePath, "").replace(".vue", "");
    return createExample(filename);
  });

  let routerList = exampleList.map(({ name }) =>
    createRouterObj(name, singleFileComponents, basePath),
  );

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
    routerList.push(createRouterObjAdvanced(folderName, component));
  });

  // Sort examples if an ordered list is provided
  exampleList = sortExamples(orderedList, exampleList);

  return {
    ButtonExamples: {
      name: sectionName,
      examples: exampleList,
      link: link,
    },
    RouterList: routerList,
  };
}
