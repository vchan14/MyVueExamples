<template>
  <ParentView @message="handleMessage" />
</template>

<script setup>
import ParentView from "./ParentView.vue";

function handleMessage(message) {
  alert(message.text);
}
</script>
