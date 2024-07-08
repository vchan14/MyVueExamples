// createReplComponent.js
import { defineComponent, h } from "vue";
import ReplWrapper from "@/components/ReplWrapper.vue"; // Adjust the path accordingly

// Props
import DeclaringPropsAppVue from "@/views/props/declaringprops/DeclaringPropsView.vue?raw";
import DeclaringPropsNestedVue from "@/views/props/declaringprops/NestedView.vue?raw";

import DefaultValuesAppVue from "@/views/props/defaultvalues/DefaultValuesView.vue?raw";
import DefaultValuesNestedVue from "@/views/props/defaultvalues/NestedView.vue?raw";

import SpreadPropsAppVue from "@/views/props/spreadprops/SpreadPropsView.vue?raw";
import SpreadPropsNestedVue from "@/views/props/spreadprops/InfoView.vue?raw";



export function createReplComponent(codeString, files = {}) {
  return defineComponent({
    render() {
      return h(ReplWrapper, { codeString, files });
    },
  });
}

// Props
export const DeclaringPropsVue = createReplComponent(DeclaringPropsAppVue, {
  "NestedView.vue": DeclaringPropsNestedVue,
});
export const DefaultValuesVue = createReplComponent(DefaultValuesAppVue, {
  "NestedView.vue": DefaultValuesNestedVue,
});
export const SpreadPropsVue = createReplComponent(SpreadPropsAppVue, {
  "InfoView.vue": SpreadPropsNestedVue,
});


