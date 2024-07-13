<template>
  <p>Child styles don't affect parent component.</p>
  <p>But parent styles do affect the direct child.</p>

  <ScopedStylesChild />
</template>

<script setup>
import ScopedStylesChild from "./ScopedStylesChild.vue";
</script>

<style scoped>
p {
  text-decoration: underline;
  text-decoration-color: lightblue;
}
</style>
