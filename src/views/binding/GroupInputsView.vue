<template>
  <h2>Size</h2>

  <label>
    <input type="radio" v-model="scoops" value="1" />
    One scoop
  </label>

  <label>
    <input type="radio" v-model="scoops" value="2" />
    Two scoops
  </label>

  <label>
    <input type="radio" v-model="scoops" value="3" />
    Three scoops
  </label>

  <h2>Flavours</h2>

  <label v-for="flavour in menu" :key="flavour">
    <input type="checkbox" v-model="flavours" :value="flavour" />
    {{ flavour }}
  </label>

  <p v-if="flavours.length === 0">Please select at least one flavour</p>
  <p v-else-if="flavours.length > scoops">
    Can't order more flavours than scoops!
  </p>
  <p v-else>
    You ordered {{ scoops }}
    {{ scoops === 1 ? "scoop" : "scoops" }}
    of {{ getFlavoursString() }}
  </p>
</template>

<script setup>
import { ref } from "vue";

const scoops = ref(1);
const flavours = ref(["Mint choc chip"]);
const menu = ["Cookies and cream", "Mint choc chip", "Raspberry ripple"];

const getFlavoursString = () => {
  if (flavours.value.length === 1) return flavours.value[0];
  return `${flavours.value.slice(0, -1).join(", ")} and ${flavours.value[flavours.value.length - 1]}`;
};
</script>

<!--https://vuejs.org/guide/essentials/forms#radio-->
