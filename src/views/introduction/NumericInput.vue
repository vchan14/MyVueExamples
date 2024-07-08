<template>
  <label>
    <input type="number" v-model="a" min="0" max="10" />
    <input type="range" v-model="a" min="0" max="10" />
  </label>

  <p>{{ a }} x {{ 2 }} = {{ Number(a) * 2 }}</p>
</template>

<script setup>
import { ref } from "vue";
const a = ref("1");
</script>
