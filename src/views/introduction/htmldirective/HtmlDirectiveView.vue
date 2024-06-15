<script setup>
import ReplWrapper from "@/components/ReplWrapper.vue";
import {AppVue} from "@/views/introduction/htmldirective/default.js";
</script>

<template>
  <ReplWrapper :code-string="AppVue"/>
</template>