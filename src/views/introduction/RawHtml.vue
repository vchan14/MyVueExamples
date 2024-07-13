<template>
  <!--
  Renders raw HTML string into the DOM. Use cautiously to avoid XSS vulnerabilities.
  Refer to: https://vuejs.org/guide/essentials/template-syntax.html#raw-html
  -->
  <p v-html="htmlString"></p>
</template>

<script setup>
const htmlString = `
Vue3 is <b>coooool</b>
<p style="color: green">smile if you agree</p>
`;
</script>
