<script setup>
import { RouterView } from 'vue-router'
import RouterButton from '@/components/RouterButton.vue'
import { ALL_EXAMPLES } from '@/examplelists.js'
</script>

<template>
  <div class="flex flex-row gap-x-2 h-full w-full">
    <div class="flex flex-col h-full gap-y-4 w-64 py-2 px-3 bg-green-300 rounded overflow-y-auto">
      <div class="text-3xl font-semibold sticky">Vue 3 Examples</div>
      <div v-for="{ name, examples } in ALL_EXAMPLES" :key="name" class="flex flex-col gap-y-2">
        <p class="text-xl font-bold">{{ name }}</p>
        <RouterButton
          v-for="example in examples"
          :key="example.name"
          :to-path="example.path"
          :name="example.name"
        />
      </div>
      <RouterButton to-path="/test" name="test me" />
    </div>
    <div class="w-full h-full border-gray-400 border-2 rounded">
      <RouterView />
    </div>
  </div>
</template>
