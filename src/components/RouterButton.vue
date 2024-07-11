<script setup>
import {computed, defineProps} from "vue";
import {useRoute} from "vue-router";

const props = defineProps({
  toPath: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "/",
  },
});

const route = useRoute();
const isSelected = computed(() => {
  return route.path === props.toPath
});
</script>

<template>
  <button
    :class="{
      selected: isSelected,
      'rounded border border-gray-400 bg-white px-2 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100': true,
    }"
    @click="$router.push(props.toPath)"
  >
    {{ props.name }}
  </button>
</template>

<style scoped>
.selected {
  background-color: #0056b3;
  color: white;
}

button.selected:hover {
  background-color: #0056b3;
}
</style>
