<template>
  <div>
    <!-- Bind the style object dynamically with :style -->
    <!-- note: camelCase-cased keys are recommended over kebab-cased e.g: fontSize, paddingLeft, backgroundColor -->
    <!-- when kebab-cased keys are used, they must be quoted e.g: 'background-color' -->
    <p
      :style="{
        color: activeColor,
        fontSize: fontSize + 'px',
        'background-color': 'lightgrey',
      }"
    >
      This paragraph's class changes dynamically.
    </p>
    <button @click="toggleStyle">Toggle Style</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define reactive properties for dynamic styling
const activeColor = ref("blue");
const fontSize = ref(16);

// Toggle the style between two states
const toggleStyle = () => {
  activeColor.value = activeColor.value === "blue" ? "red" : "blue";
};
</script>
