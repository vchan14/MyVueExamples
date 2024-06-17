// createReplComponent.js
import { defineComponent, h } from 'vue'
import ReplWrapper from '@/components/ReplWrapper.vue' // Adjust the path accordingly

import { AppVue as HelloAppVue } from '@/views/introduction/helloworld/default.js'
import { AppVue as DynamicAttributesAppVue } from '@/views/introduction/dynamicattributes/default.js'
import { AppVue as StylingAppVue } from '@/views/introduction/styling/default.js'
import { AppVue as MainComponentVue, NestedVue as SubComponentVue } from '@/views/introduction/nestedcomponents/default.js'
import { AppVue as HtmlDirectiveAppVue } from '@/views/introduction/htmldirective/default.js'

import { AppVue as ReactivityAssignmentAppVue } from '@/views/reactivity/reactivityassignment/default.js'
import { AppVue as ReactivityDeclarationAppVue } from '@/views/reactivity/reactivitydeclaration/default.js'
import { AppVue as ReactivityStatementsAppVue } from '@/views/reactivity/reactivestatements/default.js'
import beCool from '@/views/reactivity/reactivestatements/ReactiveStatements.vue?raw'


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
export const ReactivityAssignmentVue = createReplComponent(ReactivityAssignmentAppVue);
export const ReactivityDeclarationVue = createReplComponent(ReactivityDeclarationAppVue);
export const ReactivityStatementsVue = createReplComponent(beCool);


