<template>
  <!-- v-bind keeps src attribute in sync with catGif-->
  <img v-bind:src="rickGif" v-bind:alt="`${rickAlt} dancing`" />
  <!-- shorthand for v-bind -->
  <img :src="catGif" :alt="`${catAlt} playing`" />
</template>

<script setup>
const rickGif =
  "https://media.tenor.com/xo0jvr4bbTMAAAAi/rick-astley-rickroll.gif";
const rickAlt = "Rick Astley";

const catGif =
  "https://media.glamour.com/photos/580e1dc07a52574c7ef91071/master/w_2580%2Cc_limit/giphy%2520(1).gif";
const catAlt = "cat";
</script>

<style scoped>
img {
  max-width: 300px;
}
</style>
