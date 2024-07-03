<template>
  <h2>Size</h2>

  <label>
    <input type="radio" v-model="scoops" :value="1" />
    One scoop
  </label>

  <label>
    <input type="radio" v-model="scoops" :value="2" />
    Two scoops
  </label>

  <label>
    <input type="radio" v-model="scoops" :value="3" />
    Three scoops
  </label>

  <h2>Flavours</h2>

  <select multiple v-model="flavours">
    <option v-for="flavour in menu" :key="flavour" :value="flavour">
      {{ flavour }}
    </option>
  </select>

  <p v-if="flavours.length === 0">Please select at least one flavour</p>
  <p v-else-if="flavours.length > scoops">Can't order more flavours than scoops!</p>
  <p v-else>
    You ordered {{ scoops }}
    {{ scoops === 1 ? 'scoop' : 'scoops' }}
    of {{ join(flavours) }}
  </p>
</template>

<script setup>
import { ref } from 'vue';

const scoops = ref(1);
const flavours = ref(['Mint choc chip']);
const menu = ['Cookies and cream', 'Mint choc chip', 'Raspberry ripple'];

function join(flavours) {
  if (flavours.length === 1) return flavours[0];
  return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`;
}
</script>
