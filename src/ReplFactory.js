// createReplComponent.js
import { defineComponent, h } from 'vue'
import ReplWrapper from '@/components/ReplWrapper.vue' // Adjust the path accordingly

import HelloAppVue from '@/views/introduction/HelloWorldView.vue?raw'
import DynamicAttributesAppVue from '@/views/introduction/dynamicattributes/DynamicAttributesView.vue?raw'
import StylingAppVue from '@/views/introduction/StylingView.vue?raw'
import MainComponentVue from '@/views/introduction/nestedcomponents/NestedAppView.vue?raw'
import SubComponentVue from '@/views/introduction/nestedcomponents/NestedComponentsView.vue?raw'
import HtmlDirectiveAppVue from '@/views/introduction/HtmlDirectiveView.vue?raw'

import ReactivityAssignmentView from '@/views/reactivity/ReactivityAssignmentView.vue?raw'
import ReactivityDeclarationView from '@/views/reactivity/ReactiveDeclarationView.vue?raw'
import ReactivityStatementsView from '@/views/reactivity/ReactiveStatementsView.vue?raw'

import DeclaringPropsAppVue from '@/views/props/declaringprops/DeclaringPropsView.vue?raw'
import DeclaringPropsNestedVue from '@/views/props/declaringprops/NestedView.vue?raw'

import DefaultValuesAppVue from '@/views/props/defaultvalues/DefaultValuesView.vue?raw'
import DefaultValuesNestedVue from '@/views/props/defaultvalues/NestedView.vue?raw'

import SpreadPropsAppVue from '@/views/props/spreadprops/SpreadPropsView.vue?raw'
import SpreadPropsNestedVue from '@/views/props/spreadprops/InfoView.vue?raw'

export function createReplComponent(codeString, files = {}) {
  return defineComponent({
    render() {
      return h(ReplWrapper, { codeString, files })
    }
  })
}

// Introduction
export const HelloWorldVue = createReplComponent(HelloAppVue)
export const DynamicAttributesVue = createReplComponent(DynamicAttributesAppVue)
export const StylingVue = createReplComponent(StylingAppVue)
export const NestedComponentsVue = createReplComponent(MainComponentVue, {
  'NestedComponent.vue': SubComponentVue
})
export const HtmlDirectiveVue = createReplComponent(HtmlDirectiveAppVue)

// Reactivity
export const ReactivityAssignmentVue = createReplComponent(ReactivityAssignmentView)
export const ReactivityDeclarationVue = createReplComponent(ReactivityDeclarationView)
export const ReactivityStatementsVue = createReplComponent(ReactivityStatementsView)

// Props
export const DeclaringPropsVue = createReplComponent(DeclaringPropsAppVue, {
  'NestedView.vue': DeclaringPropsNestedVue
})
export const DefaultValuesVue = createReplComponent(DefaultValuesAppVue, {
  'NestedView.vue': DefaultValuesNestedVue
})
export const SpreadPropsVue = createReplComponent(SpreadPropsAppVue, {
  'InfoView.vue': SpreadPropsNestedVue
})
