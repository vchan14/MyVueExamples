<template>
  <button @click="sayHello">Click to say hello</button>
</template>

<script setup>
const emit = defineEmits(['message'])

function sayHello() {
  emit('message', {
    text: 'Hello!'
  })
}
</script>
