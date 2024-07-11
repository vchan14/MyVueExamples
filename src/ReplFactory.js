// createReplComponent.js
import { defineComponent, h } from "vue";
import ReplWrapper from "@/components/ReplWrapper.vue";

export function createReplComponent(codeString, files = {}) {
  return defineComponent({
    render() {
      return h(ReplWrapper, { codeString, files });
    },
  });
}


