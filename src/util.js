import { createReplComponent } from "@/ReplFactory.js";

export const pascalCaseToWords = (pascalCaseString) => {
  return pascalCaseString.replace(/([A-Z])/g, " $1").trim();
};

export const createExample = (fileName) => {
  return {
    name: pascalCaseToWords(fileName),
    path: `/${fileName}`,
  };
};

const getVue = (fileName, inModules, path) => {
  const filename = `${path}${fileName}.vue`;
  return inModules[filename];
};

export const createRouterObj = (fileName, modules, path) => {
  return {
    path: `/${fileName}`,
    name: fileName,
    component: createReplComponent(getVue(fileName, modules, path)),
  };
};

export const createRouterObjAdvanced = (fileName, component) => {
  return {
    path: `/${fileName}`,
    name: fileName,
    component,
  };
};

export const sortExamples = (orderedList, exampleList) => {
  return exampleList.sort((a, b) => {
    return orderedList.indexOf(a.name) - orderedList.indexOf(b.name);
  });
};

/**
 * Extracts unique folder names from a given object's keys, where each key represents a file path.
 * This function assumes that the file paths are structured such that the folder name is the second-to-last segment
 * when the path is split by "/".
 *
 * @param {Object} filesObject - An object with keys as file paths.
 * @returns {string[]} An array of unique folder names extracted from the file paths.
 */
export const extractUniqueFolderNames = (filesObject) => {
  const folderNames = new Set();
  for (const key in filesObject) {
    const folderName = key.split("/").slice(-2)[0];
    folderNames.add(folderName);
  }
  return [...folderNames];
};


/**
 * Organizes files into a structured object based on their folder paths.
 *
 * This function takes an object where keys represent file paths and values represent file contents.
 * It then organizes these files into a nested object structure, where each key is a folder name,
 * and its value is an object containing file names (as keys) and their contents (as values).
 *
 * @param {Object} filesObject - The object containing file paths as keys and file contents as values.
 * @returns {Object} An organized object with folder names as keys and objects of file names and contents as values.
 */
export const organizeFilesByFolder = (filesObject) => {
  const organized = {};
  for (const [path, content] of Object.entries(filesObject)) {
    const parts = path.split('/');
    const fileName = parts.pop(); // Get the file name
    const folderName = parts.pop(); // Get the folder name

    if (!organized[folderName]) {
      organized[folderName] = {}; // Initialize the folder object if it doesn't exist
    }

    organized[folderName][fileName] = content; // Add the file object to the folder
  };

  return organized;
};