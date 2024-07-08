import { createExample, createRouterObj, sortExamples } from "@/util.js";
import {EventHandling2ButtonExamples, EventHandling2Router} from "@/factory/EventHandling2Factory.js";

const path = "/src/views/eventhandling/";

const modules = import.meta.glob("/src/views/eventhandling/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

// Extract the file name without the directory and extension
const fileNames = Object.keys(modules).map((key) =>
  key.replace(path, "").replace(".vue", ""),
);

let exampleList = fileNames.map((filename) => createExample(filename));
exampleList = [...exampleList, ...EventHandling2ButtonExamples]

let EventHandlingRouterList = fileNames.map((filename) =>
  createRouterObj(filename, modules, path),
);
EventHandlingRouterList = [...EventHandlingRouterList, ...EventHandling2Router]

const orderedList = [
  "If Conditional",
  "Else If And Else Conditional",
  "V Show Directive",
  "List Rendering",
];

// // write a util method given to sort exampleList based on orderedList
exampleList = sortExamples(orderedList, exampleList);

const EventHandlingButtonExamples = {
  name: "Event Handling",
  examples: exampleList,
};

export { EventHandlingRouterList, EventHandlingButtonExamples };
