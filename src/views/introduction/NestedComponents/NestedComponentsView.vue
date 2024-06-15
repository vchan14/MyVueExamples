<script setup>

import ReplWrapper from "@/components/ReplWrapper.vue";
import {AppVue, NestedVue} from "@/views/introduction/NestedComponents/default.js";
</script>

<template>
  <ReplWrapper
      :code-string="AppVue"
      :files="{
        'NestedComponent.vue': NestedVue,
      }"
  />

</template>

<style scoped>

</style>