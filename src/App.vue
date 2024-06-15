<script setup>
import { RouterView } from 'vue-router'
import RouterButton from "@/components/RouterButton.vue";

</script>

<template>
  <div class="flex flex-row gap-x-2 h-full w-full">
    <div class="flex flex-col w-36 p-2">
      <div class="flex flex-col">
        <h2>Introduction</h2>
        <RouterButton to-path="/helloworld" name="Hello World"/>
        <RouterButton to-path="/dynamicattributes" name="Dynamic Attributes"/>
        <RouterButton to-path="/styling" name="Styling"/>
        <RouterButton to-path="/nestedcomponents" name="Nested Component"/>
        <RouterButton to-path="/htmldirective" name="HTML Directive"/>
      </div>

    </div>
    <div class="w-full">
      <RouterView />

    </div>
  </div>

</template>

<style scoped>

</style>
