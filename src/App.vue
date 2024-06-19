<script setup>
import { RouterView } from 'vue-router'
import RouterButton from '@/components/RouterButton.vue'
import { ALL_EXAMPLES } from '@/examplelists.js'
</script>

<template>
  <div class="flex flex-row gap-x-2 h-full w-full">
    <div class="flex flex-col gap-y-4 w-56 p-2 bg-green-200 rounded overflow-y-auto">
      <p class="text-2xl">Vue 3 Examples</p>
      <div v-for="{ name, examples } in ALL_EXAMPLES" :key="name" class="flex flex-col gap-y-2">
        <p class="text-xl">{{ name }}</p>
        <RouterButton
          v-for="example in examples"
          :key="example.name"
          :to-path="example.path"
          :name="example.name"
        />
      </div>
      <RouterButton to-path="/test" name="test me" />
    </div>
    <div class="w-full border-gray-400 border-2 mr-2 rounded">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
