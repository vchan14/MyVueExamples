<template>
  <input v-model="name" placeholder="enter your name" />
  <p>Hello {{ name || "stranger" }}!</p>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("");
    return { name };
  },
};
</script>
