import { createReplComponent } from "@/ReplFactory.js";

export const pascalCaseToWords = (pascalCaseString) => {
  return pascalCaseString.replace(/([A-Z])/g, " $1").trim();
};

export const createExample = (fileName) => {
  return {
    name: pascalCaseToWords(fileName),
    path: `/${fileName.toLowerCase()}`,
  };
};

const getVue = (fileName, inModules, path) => {
  const filename = `${path}${fileName}.vue`;
  return inModules[filename];
};

export const createRouterObj = (fileName, modules, path) => {
  const lowercase = fileName.toLowerCase();
  console.log('visalll', lowercase)

  return {
    path: `/${lowercase}`,
    name: lowercase,
    component: createReplComponent(getVue(fileName, modules, path)),
  };
};

export const createRouterObjAdvanced = (fileName, component) => {
  const lowercase = fileName.toLowerCase();
  return {
    path: `/${lowercase}`,
    name: lowercase,
    component,
  };
};

export const sortExamples = (orderedList, exampleList) => {
  return exampleList.sort((a, b) => {
    return orderedList.indexOf(a.name) - orderedList.indexOf(b.name);
  });
};
