<template>
  <div @mousemove="handleMousemove">
    The mouse position is {{ m.x }} x {{ m.y }}
  </div>
</template>

<script setup>
import { ref } from "vue";

let m = ref({ x: 0, y: 0 });

function handleMousemove(event) {
  m.value = { x: event.clientX, y: event.clientY };
}
</script>

<style scoped>
div {
  width: 100vw;
  height: 100vh;
}
</style>
