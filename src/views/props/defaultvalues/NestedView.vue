<template>
  <p>The answer is {{ answer }}</p>
</template>

<script setup>
defineProps({
  answer: {
    type: String,
    default: "a mystery",
  },
});
</script>
