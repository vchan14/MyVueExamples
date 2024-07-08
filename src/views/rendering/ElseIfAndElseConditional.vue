<template>
  <div>
    <p v-if="x > 10">{{ x }} is greater than 10</p>
    <p v-else-if="x < 5">{{ x }} is less than 5</p>
    <p v-else>{{ x }} is between 5 and 10</p>
    <select v-model="x">
      <option value="4">4</option>
      <option value="7">7</option>
      <option value="11">11</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
let x = ref(4);
</script>
` https://vuejs.org/guide/essentials/conditional.html#v-else
