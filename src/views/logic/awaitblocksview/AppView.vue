<template>
  <div>
    <button @click="handleClick">generate random number</button>
    <p v-if="number">The number is {{ number }}</p>
    <p v-else-if="error" style="color: red">{{ error }}</p>
    <p v-else>...waiting</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { generateRandomNumberAsync } from './utils.js'

let number = ref(null)
let error = ref(null)

const handleClick = async () => {
  number.value = null
  error.value = null
  try {
    number.value = await generateRandomNumberAsync()
  } catch (e) {
    error.value = 'An error occurred' + e
  }
}
handleClick()
</script>
