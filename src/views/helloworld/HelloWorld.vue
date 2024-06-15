<script setup>
import {AppVue} from "@/views/helloworld/default.js";
import ReplWrapper from "@/components/ReplWrapper.vue";


</script>

<template>
  <ReplWrapper :code-string="AppVue" />
</template>
