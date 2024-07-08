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

// Events
import ComponentEventsAppVue from "@/views/events/componentevents/AppView.vue?raw";
import ComponentEventsInnerVue from "@/views/events/componentevents/InnerView.vue?raw";
import DomEventForwardingAppVue from "@/views/events/domeventforwarding/AppView.vue?raw";
import DomEventForwardingInnerVue from "@/views/events/domeventforwarding/InnerView.vue?raw";
import EventForwardingAppVue from "@/views/events/eventforwarding/GrandParentView.vue?raw";
import EventForwardingChildVue from "@/views/events/eventforwarding/ChildView.vue?raw";
import EventForwardingParentVue from "@/views/events/eventforwarding/ParentView.vue?raw";
import DomEventViewAppVue from "@/views/events/DomEventView.vue?raw";
import EventModifiersAppVue from "@/views/events/EventModifiersView.vue?raw";
import InlineHandlerAppVue from "@/views/events/InlineHandlersView.vue?raw";

// Logic
import AwaitBlocksAppVue from "@/views/logic/awaitblocksview/AppView.vue?raw";
import AwaitBlocksSupportVue from "@/views/logic/awaitblocksview/utils.js?raw";
import KeyedEachBlocksAppVue from "@/views/logic/keyedeachblocks/AppView.vue?raw";
import KeyedEachBlocksSupportVue from "@/views/logic/keyedeachblocks/ThingView.vue?raw";
import EachBlocksAppVue from "@/views/logic/EachBlocksView.vue?raw";
import ElseBlocksAppVue from "@/views/logic/ElseBlocksView.vue?raw";
import ElseIfBlocksAppVue from "@/views/logic/ElseIfBlocksView.vue?raw";
import IfBlocksAppVue from "@/views/logic/IfBlocksView.vue?raw";

// binding

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

// Logic
export const AwaitBlocksVue = createReplComponent(AwaitBlocksAppVue, {
  "utils.js": AwaitBlocksSupportVue,
});
export const KeyedEachBlocksVue = createReplComponent(KeyedEachBlocksAppVue, {
  "ThingView.vue": KeyedEachBlocksSupportVue,
});
export const EachBlocksVue = createReplComponent(EachBlocksAppVue);
export const ElseBlocksVue = createReplComponent(ElseBlocksAppVue);
export const ElseIfBlocksVue = createReplComponent(ElseIfBlocksAppVue);
export const IfBlocksVue = createReplComponent(IfBlocksAppVue);

// Events
export const ComponentEventsVue = createReplComponent(ComponentEventsAppVue, {
  "InnerView.vue": ComponentEventsInnerVue,
});
export const DomEventForwardingVue = createReplComponent(
  DomEventForwardingAppVue,
  {
    "InnerView.vue": DomEventForwardingInnerVue,
  },
);
export const EventForwardingVue = createReplComponent(EventForwardingAppVue, {
  "ChildView.vue": EventForwardingChildVue,
  "ParentView.vue": EventForwardingParentVue,
});
export const DomEventViewVue = createReplComponent(DomEventViewAppVue);
export const EventModifiersVue = createReplComponent(EventModifiersAppVue);
export const InlineHandlersVue = createReplComponent(InlineHandlerAppVue);
