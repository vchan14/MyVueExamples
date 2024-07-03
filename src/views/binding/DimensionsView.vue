<template>
  <input type="range" v-model="size" />
  <input v-model="text" />

  <p>size: {{ w }}px x {{ h }}px</p>

  <div ref="divElement">
    <span :style="{ fontSize: size + 'px' }">{{ text }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const size = ref(42);
const text = ref('edit me');
const w = ref(0);
const h = ref(0);
const divElement = ref(null);

const updateDimensions = () => {
  if (divElement.value) {
    w.value = divElement.value.clientWidth;
    h.value = divElement.value.clientHeight;
  }
};

onMounted(() => {
  updateDimensions();
});

watch([size, text], updateDimensions);
</script>

<style scoped>
input {
  display: block;
}
div {
  display: inline-block;
}
</style>
