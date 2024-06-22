<template>
  <InnerView @click="handleClick" />
</template>

<script setup>
import InnerView from './InnerView.vue'

function handleClick() {
  alert('Clicked')
}
</script>
