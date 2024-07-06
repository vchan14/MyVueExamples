<template>
  <div>
    <!-- Bind the style objects dynamically with :style and an array -->
    <div :style="[baseStyles, overridingStyles]">Color is override to green</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const baseStyles = ref({
  color: 'red',
  padding: '10px'
});

const overridingStyles = ref({
  backgroundColor: 'lightgrey',
  color: 'green'
});
</script>