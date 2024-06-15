<script setup>
import { RouterView } from 'vue-router'
import RouterButton from "@/components/RouterButton.vue";
import { introExamples} from "@/examplelists.js";

</script>

<template>
  <div class="flex flex-row gap-x-2 h-full w-full">
    <div class="flex flex-col w-56 p-2">
      <p class="text-2xl">Vue 3 Examples</p>
      <br>
      <div class="flex flex-col gap-y-2">
        <p class="text-xl">Introduction</p>
        <RouterButton
            v-for="example in introExamples"
            :key="example.name"
            :to-path="example.path"
            :name="example.name"
        />
      </div>

    </div>
    <div class="w-full">
      <RouterView />

    </div>
  </div>

</template>

<style scoped>

</style>
