<!--https://vuejs.org/guide/essentials/computed.html-->
<template>
  <div>
    <button @click="handleCount">Count {{ count }}</button>

    <p>{{ count }} * 2 = {{ doubled }}</p>
    <p>{{ count }} * 2 = {{ quadrupled }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

let count = ref(1)

const handleCount = () => {
  count.value++
}

let doubled = computed(() => count.value * 2)
let quadrupled = computed(() => doubled.value * 2)
</script>
