<template>
  <div>
    <button v-if="user.loggedIn" @click="toggle">Log out</button>
    <button v-if="!user.loggedIn" @click="toggle">Log in</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const user = ref({ loggedIn: false });
const toggle = () => {
  user.value.loggedIn = !user.value.loggedIn;
};
</script>
