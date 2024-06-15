export const AppVue = `<template>
  <img :src="src" :alt=` + '"`${name} dancing`"' + `/>
</template>

<script setup>
const src = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnZ2NXdzODNjYmEzMnB1dmIzc291bjk2aXc1Znl1NncxMnpvYjUzdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ju7l5y9osyymQ/giphy.gif';
const name = "Rick Astley";

</script>
`.trimStart()