export const AppVue = `<template>
  <img :src="src" :alt=` + '"`${name} dancing`"' + `/>
</template>

<script setup>
const src = "https://media.tenor.com/xo0jvr4bbTMAAAAi/rick-astley-rickroll.gif"
const name = "Rick Astley";

</script>
`.trimStart()