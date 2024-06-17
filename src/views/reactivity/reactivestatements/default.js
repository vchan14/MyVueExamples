export const AppVue = `
<template>
  <p>click 10 times</p>
  <button @click="handleClick">
    Clicked {{count}} {{count === 0 ? 'time' : 'times'}}
  </button>
</template>

<script setup>
import {ref, watch} from 'vue';
const count = ref(0);
const handleClick = () => {
  count.value++;
}
watch(count, (newCount) => {
  if (newCount >= 10) {
    count.value = 9;
    alert('count is dangerously high!');
  }
})
</script>
`.trimStart()