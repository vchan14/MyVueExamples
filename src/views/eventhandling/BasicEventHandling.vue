<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      max-width: 300px;
      row-gap: 20px;
    "
  >
    <!-- Using v-on:click to call a method -->
    <button v-on:click="incrementCount">Increment with a method call</button>
    <!-- `v-on:click` can be shorten to `@click` -->
    <!-- @click performs inline modification -->
    <button @click="count = count + 1">Increment inline</button>
    <p>Current Count: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

// when binding to a method name, Vue automatically passes the event as an argument
function incrementCount(event) {
  count.value++;
  console.log("Event:", event);
}
</script>
https://vuejs.org/guide/essentials/event-handling.html
