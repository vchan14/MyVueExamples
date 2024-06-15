<script setup>
const props = defineProps({
  toPath: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: '/'
  }
})

</script>

<template>
  <button
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow"
      @click="$router.push(props.toPath)"
  >
    {{ props.name }}
  </button>

</template>

<style scoped>

</style>