<template>
  <button @click="handleClick">
    Clicked {{ count }} {{ count === 0 ? "time" : "times" }}
  </button>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
const handleClick = () => {
  count.value++;
};
</script>
