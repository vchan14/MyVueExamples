<template>
  <input v-model="name" placeholder="enter your name" />
  <p>Hello {{ name || 'stranger' }}!</p>
</template>

<script setup>
import { ref } from 'vue';
const name = ref('');
</script>