<template>
  <p>
    The <code>{{ name }}</code> package is {{ speed }} fast. Download version
    {{ version }} from
    <a :href="`https://www.npmjs.com/package/${name}`">npm</a>
    and <a :href="website">learn more here</a>
  </p>
</template>

<script setup>
defineProps(["name", "version", "speed", "website"]);
</script>
