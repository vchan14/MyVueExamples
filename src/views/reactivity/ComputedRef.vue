<template>
  <div>
    <input v-model="firstName" placeholder="First Name" />
    <input v-model="lastName" placeholder="Last Name" />
    <p>Full Name: {{ fullName }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const firstName = ref("");
const lastName = ref("");

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`.trim();
});
</script>
https://vuejs.org/guide/essentials/computed.html#basic-example
