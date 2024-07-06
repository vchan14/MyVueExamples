<template>
  <button @click="handleClick">
    <!-- in template you don't need .value to access the value-->
    Clicked {{ count }} {{ count === 0 ? "time" : "times" }}
  </button>
</template>

<script setup>
import { ref } from "vue";
// ref returns a reactive object that has only .value property
// can be used for both primitive and non-primitive values
const count = ref(0);
const handleClick = () => {
  count.value++; // .value is required to get/set the value inside <script> tag
};
</script>
https://vuejs.org/guide/essentials/reactivity-fundamentals.html#ref
