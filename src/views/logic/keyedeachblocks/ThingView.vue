<script setup>
import { computed } from 'vue'

// Define the `current` prop
const props = defineProps({
  current: String
})

// Compute the `initial` value upon initialization
const initial = computed(() => props.current)
</script>

<template>
  <p>
    <span :style="{ backgroundColor: initial }">initial</span>
    <span :style="{ backgroundColor: current }">current</span>
  </p>
</template>

<style>
span {
  display: inline-block;
  padding: 0.2em 0.5em;
  margin: 0 0.2em 0.2em 0;
  width: 4em;
  text-align: center;
  border-radius: 0.2em;
  color: white;
}
</style>
