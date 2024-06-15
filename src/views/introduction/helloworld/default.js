export const AppVue = `
<template>
  <h1>Hello {{ name }}!</h1>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('world');
</script>
`.trimStart()