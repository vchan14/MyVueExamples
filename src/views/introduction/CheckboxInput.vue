<template>
  <label>
    <input type="checkbox" v-model="isChecked" />
    Yes! Send me regular email spam
  </label>
  <p>The box is {{ `checked: ${isChecked ? "yes" : "no"}` }}</p>
</template>

<script setup>
import { ref } from "vue";
const isChecked = ref(false);
</script>
