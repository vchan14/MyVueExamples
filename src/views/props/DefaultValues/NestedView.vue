<template>
  <!-- Displays the value of the 'answer' prop -->
  <p>The answer is {{ answer }}</p>
</template>

<script setup>
// Declares 'answer' prop with type String and a default value of "a mystery"
const props = defineProps({
  answer: {
    type: String,
    default: "a mystery",
  },
});
console.log("here is your answer:", props.answer);
</script>
