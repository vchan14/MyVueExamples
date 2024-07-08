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