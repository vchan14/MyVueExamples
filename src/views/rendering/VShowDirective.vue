<template>
  <div class="container">
    <div>
      Check both boxes and toggle the buttons. v-show still preserve the state
      but v-if not.
    </div>
    <div>
      <button @click="toggleShow = !toggleShow">
        Toggle Input with v-show
      </button>
      <input v-show="toggleShow" type="checkbox" />
    </div>
    <div>
      <button @click="toggleIf = !toggleIf">Toggle Input with v-if</button>
      <input v-if="toggleIf" type="checkbox" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const toggleShow = ref(true);
const toggleIf = ref(true);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  justify-content: center;
}
.container div {
  display: flex;
}
</style>