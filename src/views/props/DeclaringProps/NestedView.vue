<template>
  <!-- Displays the 'answer' prop value -->
  <p>The answer is {{ answer }}</p>
</template>

<script setup>
// Defines 'answer' as a prop this component accepts
defineProps(["answer"]);
</script>
