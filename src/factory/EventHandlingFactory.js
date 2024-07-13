import { generateButtonExamplesAndRouterList } from "@/factoryUtil.js";

const path = "/src/views/eventhandling/";
const sectionName = "Event Handling";
const link = "https://vuejs.org/guide/essentials/event-handling.html";

const singleFileComponents = import.meta.glob(
  "/src/views/eventhandling/*.vue",
  {
    eager: true,
    query: "?raw",
    import: "default",
  },
);

// Import components from folders
const folderComponents = import.meta.glob("/src/views/eventhandling/*/*.vue", {
  eager: true,
  query: "?raw",
  import: "default",
});

const {
  ButtonExamples: EventHandlingExamples,
  RouterList: EventHandlingRouterList,
} = generateButtonExamplesAndRouterList(
  path,
  singleFileComponents,
  folderComponents,
  sectionName,
  link,
);

export { EventHandlingExamples, EventHandlingRouterList };
