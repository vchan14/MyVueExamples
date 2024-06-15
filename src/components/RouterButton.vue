<script setup>
import { defineProps, computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  toPath: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: '/'
  }
});

const route = useRoute();
const isSelected = computed(() => route.path === props.toPath);
</script>

<template>
  <button
      :class="{'selected': isSelected, 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow': true}"
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