export const AppVue = `
<template>
  <p>...don't affect this element</p>
  <NestedComponent/>
</template>

<script setup>
import NestedComponent from './NestedComponent.vue'
</script>

`.trimStart()


export const NestedVue = `
<template>
    <p>Styled!</p>
</template>
<style scoped>
  p {
    color: purple;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
</style >

`.trimStart()