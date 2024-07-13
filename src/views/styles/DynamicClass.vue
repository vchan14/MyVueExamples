<template>
  <div>
    <!--
    We can pass an object to :class (short for v-bind:class) to dynamically toggle classes
    -->
    <p :class="{ activeClass: isActive, inactiveClass: !isActive }">
      This paragraph's class changes dynamically.
    </p>
    <button @click="toggleActive">Toggle Active</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped>
.activeClass {
  color: green;
}

.inactiveClass {
  color: red;
}
</style>
