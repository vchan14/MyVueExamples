<template>
  <p>Child styles don't affect parent component.</p>
  <p>But parent styles do affect the direct child.</p>

  <NestedComponent />
</template>

<script setup>
import NestedComponent from "./NestedComponent.vue";
</script>

<style scoped>
p {
  text-decoration: underline;
  text-decoration-color: lightblue;
}
</style>
<!--https://vuejs.org/api/sfc-css-features.html#scoped-css-->