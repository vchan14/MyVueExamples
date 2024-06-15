<script setup>
import { RouterView } from 'vue-router'
import RouterButton from "@/components/RouterButton.vue";
import {introExamples, reactivityExamples} from "@/examplelists.js";

</script>

<template>
  <div class="flex flex-row gap-x-2 h-full w-full">
    <div class="flex flex-col gap-y-4 w-56 p-2">
      <p class="text-2xl">Vue 3 Examples</p>
      <div class="flex flex-col gap-y-2">
        <p class="text-xl">Introduction</p>
        <RouterButton
            v-for="example in introExamples"
            :key="example.name"
            :to-path="example.path"
            :name="example.name"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <p class="text-xl">Reactivity</p>
        <RouterButton
            v-for="example in reactivityExamples"
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
