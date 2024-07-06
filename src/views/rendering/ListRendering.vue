<template>
  <ul>
    <!-- Use v-for to render each item in the items array -->
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<script setup>
// Define a reactive array of items
const items = ['Apple', 'Banana', 'Cherry'];
</script>