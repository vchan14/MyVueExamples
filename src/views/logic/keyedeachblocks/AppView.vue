<script setup>
import { ref } from 'vue';
import ThingView from "./ThingView.vue";

const things = ref([
  { id: 1, color: 'darkblue' },
  { id: 2, color: 'indigo' },
  { id: 3, color: 'deeppink' },
  { id: 4, color: 'salmon' },
  { id: 5, color: 'gold' }
]);

function handleClick() {
  things.value = things.value.slice(1);
}
</script>

<template>
  <button @click="handleClick"> Remove first thing </button>

  <div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 1em">
    <div>
      <h2>Keyed</h2>
      <div v-for="{id, color} in things" :key="id">
        <ThingView :current="color" />
      </div>
    </div>

    <div>
      <h2>Unkeyed</h2>
      <div v-for="{color} in things">
        <ThingView :current="color" />
      </div>
    </div>
  </div>
</template>