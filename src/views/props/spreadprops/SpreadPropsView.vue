<template>
  <NestedView v-bind="pkg" />
</template>

<script setup>
import NestedView from './InfoView.vue'
const pkg = {
  name: 'svelte',
  version: 3,
  speed: 'blazing',
  website: 'https://svelte.dev'
}
</script>
