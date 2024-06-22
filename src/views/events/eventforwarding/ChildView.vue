<template>
  <button @click="sayHello">Say Hello</button>
</template>

<script setup>
const emit = defineEmits(['message'])

function sayHello() {
  emit('message', {
    text: 'Hello!'
  })
}
</script>
