import {createExample, createRouterObj} from "@/util.js";


const path = '/src/views/lifecyclehooks/';

const modules = import.meta.glob('/src/views/lifecyclehooks/*.vue', { eager: true, query: '?raw', import: 'default' });

const fileNames = Object.keys(modules).map(key => {
  // Extract the file name without the directory and extension
  return key.replace(path, '').replace('.vue', '');
});

const exampleList = fileNames.map(filename => createExample(filename));

export const LifeCycleRouterList = fileNames.map(filename => createRouterObj(filename, modules, path) );


export const LifeCycleExamples = {
  name: "Life Cycle",
  examples: exampleList
};