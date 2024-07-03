<template>
  <label>
    <input type="number" v-model="a" min="0" max="10" />
    <input type="range" v-model="a" min="0" max="10" />
  </label>

  <label>
    <input type="number" v-model="b" min="0" max="10" />
    <input type="range" v-model="b" min="0" max="10" />
  </label>

  <p>{{ a }} + {{ b }} = {{ Number(a) + Number(b) }}</p>
</template>

<script setup>
import { ref } from 'vue';
const a = ref('1');
const b = ref('2');
</script>