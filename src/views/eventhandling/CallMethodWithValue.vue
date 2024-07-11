<template>
  <div>
    <!-- Call sayHello with both name and event as arguments -->
    <button @click="sayHello('John', $event)">Greet John</button>
  </div>
</template>

<script setup>
function sayHello(name, event) {
  alert(`Hello, ${name}!!! event type - ${event.type}!`);
}
</script>
