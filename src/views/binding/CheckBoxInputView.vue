<template>
  <label>
    <input type="checkbox" v-model="isChecked" />
    Yes! Send me regular email spam
  </label>

  <p v-if="isChecked">Thank you. We will bombard your inbox and not sell your personal details.</p>
  <p v-else>You must opt-in to continue. If you're not paying, you're the product.</p>

  <button :disabled="!isChecked"> Subscribe </button>
</template>

<script setup>
import { ref } from 'vue';
const isChecked = ref(false);
</script>