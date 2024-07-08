<template>
  <!-- the click event's propagation will be stopped -->
  <a @click.stop="doThis">Click me</a>

  <!-- the submit event will no longer reload the page -->
  <form @submit.prevent="onSubmit">
    <button type="submit">Submit</button>
  </form>

  <!-- modifiers can be chained -->
  <a @click.stop.prevent="doThat">Click me too</a>

  <!-- just the modifier -->
  <form @submit.prevent>
    <button type="submit">Submit without action</button>
  </form>

  <!-- only trigger handler if event.target is the element itself -->
  <!-- i.e. not from a child element -->
  <div @click.self="doThat">Click me but not my children</div>
</template>

<script setup>
const doThis = () => {
  alert("doThis called");
};

const onSubmit = () => {
  alert("Form submitted");
};

const doThat = () => {
  alert("doThat called");
};
</script>

<style scoped>
/* Style as needed */
</style>
