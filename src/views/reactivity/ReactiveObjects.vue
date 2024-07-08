<template>
  <div>
    <p>Message: {{ state.message }}</p>
    <p>Nested Count: {{ state.nested.count }}</p>
    <button @click="incrementNestedCount">Increment Nested Count</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// reactive() makes non-primitive values reactive such as object, array, set, map
const state = reactive({
  message: "Hello Vue 3!",
  nested: {
    count: 0,
  },
});

const incrementNestedCount = () => {
  // reactive() doesn't need .value to access the value like in ref()
  state.nested.count++;
};
</script>
https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive
