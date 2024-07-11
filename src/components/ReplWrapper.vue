<script setup>
import { Repl, useStore } from "@vue/repl";
import CodeMirror from "@vue/repl/codemirror-editor";

// require a prop called codeString
const props = defineProps({
  codeString: {
    type: String,
    required: false,
    default: ""
  },
  files: {
    type: Object,
    default: () => ({}),
  },
});

const store = new useStore({});
if (props.codeString) {
  store.setFiles({
    ...store.getFiles(),
    "App.vue": props.codeString,
    ...props.files,
  });
} else {
  store.setFiles({
    ...store.getFiles(),
    ...props.files,
  });
}

</script>

<template>
  <Repl :editor="CodeMirror" :store="store" />
</template>
