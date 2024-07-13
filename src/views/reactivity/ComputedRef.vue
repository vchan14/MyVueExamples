<template>
  <div>
    <input v-model="firstName" placeholder="First Name" />
    <input v-model="lastName" placeholder="Last Name" />
    <!-- Displays the concatenated full name -->
    <p>Full Name: {{ fullName }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const firstName = ref("");
const lastName = ref("");

// computed() method doesn't take any arguments
// this method is reactive and will update when firstName or lastName changes
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`.trim();
});
</script>
