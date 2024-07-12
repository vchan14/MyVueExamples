<template>
  <div>
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