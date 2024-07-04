<template>
  <h2>Insecurity questions</h2>

  <form @submit.prevent="handleSubmit">
    <select v-model="selected" @change="answer = ''">
      <option
        v-for="question in questions"
        :key="question.id"
        :value="question"
      >
        {{ question.text }}
      </option>
    </select>

    <input v-model="answer" />

    <button :disabled="!answer" type="submit">Submit</button>
  </form>

  <p>selected question {{ selected ? selected.id : "[waiting...]" }}</p>
</template>

<script setup>
import { ref } from "vue";

const questions = ref([
  { id: 1, text: `Where did you go to school?` },
  { id: 2, text: `What is your mother's name?` },
  {
    id: 3,
    text: `What is another personal fact that an attacker could easily find with Google?`,
  },
]);

let selected = ref(null);
let answer = ref("");

const handleSubmit = () => {
  alert(
    `answered question ${selected.value.id} (${selected.value.text}) with "${answer.value}"`,
  );
};
</script>

<style scoped>
input {
  display: block;
  width: 500px;
  max-width: 100%;
}
</style>
