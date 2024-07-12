<template>
  <p v-html="htmlString"></p>
</template>

<script setup>
const htmlString = `
Vue3 is <b>coooool</b>
<p style="color: green">smile if you agree</p>
`;
</script>
