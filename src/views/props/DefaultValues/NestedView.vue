<template>
  <!-- Displays the value of the 'answer' prop -->
  <p>The answer is {{ answer }}</p>
</template>

<script setup>
// Declares 'answer' prop with type String and a default value of "a mystery"
defineProps({
  answer: {
    type: String,
    default: "a mystery",
  },
});
</script>