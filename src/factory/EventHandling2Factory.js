// Events
import ComponentEventsAppVue from "@/views/eventhandling/componentevents/AppView.vue?raw";
import ComponentEventsInnerVue from "@/views/eventhandling/componentevents/InnerView.vue?raw";
import DomEventForwardingAppVue from "@/views/eventhandling/domeventforwarding/AppView.vue?raw";
import DomEventForwardingInnerVue from "@/views/eventhandling/domeventforwarding/InnerView.vue?raw";
import EventForwardingAppVue from "@/views/eventhandling/eventforwarding/GrandParentView.vue?raw";
import EventForwardingChildVue from "@/views/eventhandling/eventforwarding/ChildView.vue?raw";
import EventForwardingParentVue from "@/views/eventhandling/eventforwarding/ParentView.vue?raw";
import { createReplComponent } from "@/ReplFactory.js";
import { createExample, createRouterObjAdvanced } from "@/util.js";

const ComponentEventsVue = {
  name: "Component Events",
  component: createReplComponent(ComponentEventsAppVue, {
    "InnerView.vue": ComponentEventsInnerVue,
  }),
};

const DomEventForwardingVue = {
  name: "Dom Event Forwarding",
  component: createReplComponent(DomEventForwardingAppVue, {
    "InnerView.vue": DomEventForwardingInnerVue,
  }),
};

const EventForwardingVue = {
  name: "Event Forwarding",
  component: createReplComponent(EventForwardingAppVue, {
    "ChildView.vue": EventForwardingChildVue,
    "ParentView.vue": EventForwardingParentVue,
  }),
};

const list = [ComponentEventsVue, DomEventForwardingVue, EventForwardingVue];

export const EventHandling2Router = list.map((component) =>
  createRouterObjAdvanced(component.name, component.component),
);

export const EventHandling2ButtonExamples = list.map((component) =>
  createExample(component.name),
);
