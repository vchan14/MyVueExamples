<template>
  <div>
    <ul>
      <li v-for="todo in todosArr" :key="todo.id">
        {{ todo.todo }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const todosArr = ref([
  {
    id: 1,
    todo: "Walk the dog",
  },
  {
    id: 2,
    todo: "Water the plants",
  },
  {
    id: 3,
    todo: "Wash the dishes",
  },
]);
</script>
