<script setup>

import ReplWrapper from "@/components/ReplWrapper.vue";
import {AppVue} from "@/views/introduction/dynamicattributes/default.js";

</script>

<template>
  <ReplWrapper :code-string="AppVue"/>
</template>