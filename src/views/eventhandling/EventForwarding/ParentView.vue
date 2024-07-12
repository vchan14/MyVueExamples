<template>
  <ChildView @message="handleMessage" />
</template>

<script setup>
import ChildView from "./ChildView.vue";
const emit = defineEmits(["message"]);
function handleMessage(message) {
  emit("message", message);
}
</script>
