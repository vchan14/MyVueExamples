<template>
  <div>
    <input type="text" v-model="name" placeholder="Enter your name" />
    <button @click="submit">Submit</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("");
const submit = () => {
  alert(`Hello ${name.value}`);
};
</script>
