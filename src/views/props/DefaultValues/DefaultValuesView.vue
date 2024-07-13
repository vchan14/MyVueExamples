<template>
  <!-- 'NestedView' component with 'answer' prop set to "42" -->
  <NestedView answer="42" />
  <!-- 'NestedView' component without 'answer' prop, uses default value -->
  <NestedView />
</template>

<script setup>
import NestedView from "./NestedView.vue";
</script>