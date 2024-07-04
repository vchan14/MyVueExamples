<template>
  <textarea v-model="text" />
  <div v-html="htmlText"></div>
</template>

<script setup>
import { ref, computed } from "vue";

const text = ref("Some words are *italic*, some are **bold**");

function marked(markdown) {
  // Basic implementation for italic and bold
  let html = markdown
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
    .replace(/\*(.*?)\*/g, "<em>$1</em>"); // Italic

  // Add more rules as needed
  return html;
}

const htmlText = computed(() => marked(text.value));
</script>

<style>
textarea {
  width: 100%;
  height: 200px;
}
</style>
