<script setup>
import { Repl } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
</script>

<template>
  <Repl :editor="CodeMirror" />
</template>
