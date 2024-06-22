<template>
  <InnerView @message="handleMessage" />
</template>

<script setup>
import InnerView from '@/views/events/domeventforwarding/InnerView.vue'
const emit = defineEmits(['message'])
function handleMessage(message) {
  emit('message', message)
}
</script>
