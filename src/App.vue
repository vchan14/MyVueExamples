<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <div class="flex flex-row gap-x-2 h-full w-full">
    <div class="flex flex-col w-36 p-2">
      <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow"
          @click="$router.push('/')"
      >
        Home
      </button>
      <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow"
          @click="$router.push('/about')"
      >
        About
      </button>
      <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow"
          @click="$router.push('/helloworld')"
      >
        Hello World
      </button>
      <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow"
          @click="$router.push('/dynamicattributes')"
      >
        Dynamic Attributes
      </button>
    </div>
    <div class="w-full">
      <RouterView />

    </div>
  </div>

</template>

<style scoped>

</style>
