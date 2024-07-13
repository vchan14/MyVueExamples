<template>
  <!-- v-bind keeps src attribute in sync with rickGif-->
  <img v-bind:src="rickGif" v-bind:alt="`${rickAlt} dancing`" />
  <!-- shorthand for v-bind -->
  <img :src="catGif" :alt="`${catAlt} playing`" />
</template>

<script setup>
const rickGif = "https://tinyurl.com/3b525smu";
const rickAlt = "Rick Astley";

const catGif = "https://tinyurl.com/ydjtf3y3";
const catAlt = "cat";
</script>

<style scoped>
img {
  max-width: 300px;
}
</style>
