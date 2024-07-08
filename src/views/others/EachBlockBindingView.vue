<template>
  <h1>Todos</h1>

  <div v-for="(todo, index) in todos" :key="index">
    <input type="checkbox" v-model="todo.done" />

    <input
      placeholder="What needs to be done?"
      v-model="todo.text"
      :disabled="todo.done"
    />
  </div>

  <p>{{ remaining }} remaining</p>

  <button @click="add">Add new</button>

  <button @click="clear">Clear completed</button>
</template>

<script setup>
import { ref, computed } from "vue";

const todos = ref([
  { done: false, text: "finish Svelte tutorial" },
  { done: false, text: "build an app" },
  { done: false, text: "world domination" },
]);

function add() {
  todos.value.push({ done: false, text: "" });
}

function clear() {
  todos.value = todos.value.filter((t) => !t.done);
}

const remaining = computed(() => todos.value.filter((t) => !t.done).length);
</script>
