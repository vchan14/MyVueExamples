<template>
  <p v-html="htmlString"></p>
</template>

<script setup>
const htmlString = `
Vue3 is <b>coooool</b>
<p style="color: green">smile if you agree</p>
`;
</script>
<!-- Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS attacks. Only use v-html on trusted content and never on user-provided content. -->
https://vuejs.org/guide/essentials/template-syntax.html#raw-html
