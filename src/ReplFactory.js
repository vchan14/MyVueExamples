// createReplComponent.js
import { defineComponent, h } from 'vue'
import ReplWrapper from '@/components/ReplWrapper.vue' // Adjust the path accordingly

// Introduction
import HelloAppVue from '@/views/introduction/HelloWorldView.vue?raw'
import DynamicAttributesAppVue from '@/views/introduction/dynamicattributes/DynamicAttributesView.vue?raw'
import StylingAppVue from '@/views/introduction/StylingView.vue?raw'
import MainComponentVue from '@/views/introduction/nestedcomponents/NestedAppView.vue?raw'
import SubComponentVue from '@/views/introduction/nestedcomponents/NestedComponentsView.vue?raw'
import HtmlDirectiveAppVue from '@/views/introduction/HtmlDirectiveView.vue?raw'

// Reactivity
import ReactivityAssignmentView from '@/views/reactivity/ReactivityAssignmentView.vue?raw'
import ReactivityDeclarationView from '@/views/reactivity/ReactiveDeclarationView.vue?raw'
import ReactivityStatementsView from '@/views/reactivity/ReactiveStatementsView.vue?raw'

// Props
import DeclaringPropsAppVue from '@/views/props/declaringprops/DeclaringPropsView.vue?raw'
import DeclaringPropsNestedVue from '@/views/props/declaringprops/NestedView.vue?raw'

import DefaultValuesAppVue from '@/views/props/defaultvalues/DefaultValuesView.vue?raw'
import DefaultValuesNestedVue from '@/views/props/defaultvalues/NestedView.vue?raw'

import SpreadPropsAppVue from '@/views/props/spreadprops/SpreadPropsView.vue?raw'
import SpreadPropsNestedVue from '@/views/props/spreadprops/InfoView.vue?raw'


// Logic
import AwaitBlocksAppVue from '@/views/logic/awaitblocksview/AppView.vue?raw';
import KeyedEachBlocksAppVue from '@/views/logic/keyedeachblocks/AppView.vue?raw';
import KeyedEachBlocksSupportVue from '@/views/logic/keyedeachblocks/ThingView.vue?raw';
import EachBlocksAppVue from '@/views/logic/EachBlocksView.vue?raw';
import ElseBlocksAppVue from '@/views/logic/ElseBlocksView.vue?raw';
import ElseIfBlocksAppVue from '@/views/logic/ElseIfBlocksView.vue?raw';
import IfBlocksAppVue from '@/views/logic/IfBlocksView.vue?raw';

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

// Logic
export const AwaitBlocksVue = createReplComponent(AwaitBlocksAppVue);
export const KeyedEachBlocksVue = createReplComponent(KeyedEachBlocksAppVue, {
  'ThingView.vue': KeyedEachBlocksSupportVue
});
export const EachBlocksVue = createReplComponent(EachBlocksAppVue);
export const ElseBlocksVue = createReplComponent(ElseBlocksAppVue);
export const ElseIfBlocksVue = createReplComponent(ElseIfBlocksAppVue);
export const IfBlocksVue = createReplComponent(IfBlocksAppVue);
