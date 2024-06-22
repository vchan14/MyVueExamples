<template>
  <div>
    <h1>The Famous Cats of YouTube</h1>
    <ul>
      <li v-for="({ id, name }, i) in cats" :key="id">
        <a target="_blank" rel="noreferrer" :href="`https://www.youtube.com/watch?v=${id}`">
          {{ i + 1 }}: {{ name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
let cats = [
  { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
  { id: 'z_AbfPXTKms', name: 'Maru' },
  { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
]
</script>
