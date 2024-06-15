<script setup>

import ReplWrapper from "@/components/ReplWrapper.vue";
import {AppVue} from "@/views/dynamicattributes/default.js";

</script>

<template>
  <ReplWrapper :code-string="AppVue"/>
</template>