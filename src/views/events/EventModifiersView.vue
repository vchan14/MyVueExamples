<!--https://vuejs.org/guide/essentials/event-handling#event-modifiers-->
<template>
  <button @click.once="handleClick">Click me</button>
</template>

<script setup>
function handleClick() {
  alert("no more alerts");
}
</script>
