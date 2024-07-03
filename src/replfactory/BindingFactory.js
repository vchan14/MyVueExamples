import {createReplComponent} from "@/ReplFactory.js";

const path = '/src/views/binding/';

const modules = import.meta.glob('/src/views/binding/*.vue',
  { eager: true, query: '?raw', import: 'default' });
const getVue = (file) => {
  const filename = `${path}${file}View.vue`;
  return modules[filename];
}

// Binding
export const CanvasBindingVue = createReplComponent(getVue('CanvasBinding'));
export const CheckBoxInputVue = createReplComponent(getVue('CheckBoxInput'));
export const ComponentBindingVue = createReplComponent(getVue('ComponentBinding'));
export const DimensionsVue = createReplComponent(getVue('Dimensions'));
export const EachBlockBindingVue = createReplComponent(getVue('EachBlockBinding'));
export const FileInputsVue = createReplComponent(getVue('FileInputs'));
export const GroupInputsVue = createReplComponent(getVue('GroupInputs'));
export const MediaElementVue = createReplComponent(getVue('MediaElement'));
export const NumericInputVue = createReplComponent(getVue('NumericInput'));
export const SelectBindingVue = createReplComponent(getVue('SelectBinding'));
export const SelectMultipleVue = createReplComponent(getVue('SelectMultiple'));
export const TextAreaInputVue = createReplComponent(getVue('TextAreaInput'));
export const TextInputVue = createReplComponent(getVue('TextInput'));
