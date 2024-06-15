export const AppVue = `
<!-- Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS attacks. Only use v-html on trusted content and never on user-provided content. -->
<script setup>
  const htmlString = \`hello <b>world</b>\`;
</script>

<template>
  <p v-html="htmlString"></p>
</template>
`.trimStart()