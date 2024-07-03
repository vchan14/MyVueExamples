<template>
  <label for="avatar">Upload a picture:</label>
  <input accept="image/png, image/jpeg" ref="avatarInput" @change="handleFileChange" id="avatar" name="avatar" type="file" />

  <label for="many">Upload multiple files of any type:</label>
  <input ref="manyInput" @change="handleFileChange" id="many" multiple type="file" />

  <div v-if="files && files.length">
    <h2>Selected files:</h2>
    <p v-for="file in Array.from(files)" :key="file.name">{{ file.name }} ({{ file.size }} bytes)</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const files = ref(null);
const avatarInput = ref(null);
const manyInput = ref(null);

const handleFileChange = (event) => {
  files.value = event.target.files;
};

watch(files, (newFiles) => {
  if (newFiles) {
    console.log(newFiles);
    for (const file of newFiles) {
      console.log(`${file.name}: ${file.size} bytes`);
    }
  }
});
</script>

<style scoped>
input {
  display: block;
  margin-bottom: 10px;
}
</style>
