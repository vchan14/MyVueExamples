<script setup>
import { Repl, useStore } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'

// require a prop called codeString
const props = defineProps({
  codeString: {
    type: String,
    required: true,
  },
  files: {
    type: Object,
    default: () => ({}),
  },
})


const store = new useStore({})

store.setFiles({
  ...store.getFiles(),
  'App.vue': props.codeString,
})



</script>

<template>
  <Repl
      :editor="CodeMirror"
      :store="store"
  />
</template>
