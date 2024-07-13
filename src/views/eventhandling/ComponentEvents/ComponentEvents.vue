<template>
  <InnerView @message="handleMessage" />
</template>

<script setup>
import InnerView from "./InnerView.vue";

function handleMessage(message) {
  alert(message.text);
}
</script>
