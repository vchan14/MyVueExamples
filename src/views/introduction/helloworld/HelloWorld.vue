<script setup>
import {AppVue} from "@/views/introduction/helloworld/default.js";
import ReplWrapper from "@/components/ReplWrapper.vue";
</script>

<template>
  <ReplWrapper :code-string="AppVue" />
</template>
