// createReplComponent.js
import { defineComponent, h } from 'vue'
import ReplWrapper from '@/components/ReplWrapper.vue' // Adjust the path accordingly

import HelloAppVue from '@/views/introduction/helloworld/HelloWorldView.vue?raw';
import DynamicAttributesAppVue from '@/views/introduction/dynamicattributes/DynamicAttributesView.vue?raw';
import StylingAppVue from '@/views/introduction/styling/StylingView.vue?raw';
import MainComponentVue from '@/views/introduction/nestedcomponents/NestedAppView.vue?raw';
import SubComponentVue from '@/views/introduction/nestedcomponents/NestedComponentsView.vue?raw';
import HtmlDirectiveAppVue from '@/views/introduction/htmldirective/HtmlDirectiveView.vue?raw';

import ReactivityAssignmentView from '@/views/reactivity/reactivityassignment/ReactivityAssignmentView.vue?raw'
import ReactivityDeclarationView from '@/views/reactivity/reactivitydeclaration/ReactiveDeclarationView.vue?raw'
import ReactivityStatementsView from '@/views/reactivity/reactivestatements/ReactiveStatementsView.vue?raw'


export function createReplComponent(codeString, files ={}) {
    return defineComponent({
        render() {
            return h(ReplWrapper, { codeString, files})
        }
    })
}

// Introduction
export const HelloWorldVue = createReplComponent(HelloAppVue);
export const DynamicAttributesVue = createReplComponent(DynamicAttributesAppVue);
export const StylingVue = createReplComponent(StylingAppVue);
export const NestedComponentsVue = createReplComponent(MainComponentVue, {
    'NestedComponent.vue': SubComponentVue
} );
export const HtmlDirectiveVue = createReplComponent(HtmlDirectiveAppVue);

// Reactivity
export const ReactivityAssignmentVue = createReplComponent(ReactivityAssignmentView);
export const ReactivityDeclarationVue = createReplComponent(ReactivityDeclarationView);
export const ReactivityStatementsVue = createReplComponent(ReactivityStatementsView);


