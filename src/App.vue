<script setup>
import { RouterView, useRoute } from "vue-router";
import RouterButton from "@/components/RouterButton.vue";
import { ALL_EXAMPLES } from "@/exampleButtons.js";
import { watch } from "vue";
import { useTitle } from "@vueuse/core";
import questionIcon from "@/assets/question.svg";
import githubIcon from "@/assets/github.svg";

const route = useRoute();
const title = useTitle();
watch(
  () => route.path,
  (newPath) => {
    title.value = `VueEx${newPath}` || "VueEx";
  },
);
</script>

<template>
  <div class="flex h-full w-full flex-row gap-x-2">
    <div
      class="scrollable-area flex h-full w-64 flex-col gap-y-4 overflow-y-auto rounded bg-green-300 px-3 py-2"
    >
      <div class="sticky text-3xl font-semibold">Vue 3 Examples</div>
      <div
        v-for="{ name, examples, link } in ALL_EXAMPLES"
        :key="name"
        class="flex flex-col gap-y-2"
      >
        <p class="text-xl font-bold">
          {{ name }}
          <a :href="link" target="_blank">
            <img class="inline w-4" :src="questionIcon" alt="Question" />
          </a>
        </p>
        <RouterButton
          v-for="example in examples"
          :key="example.name"
          :to-path="example.path"
          :name="example.name"
        />
      </div>
      <!--      <RouterButton to-path="/test" name="test me" />-->

      <p
        class="text-center text-sm font-bold text-gray-800 dark:text-neutral-400"
      >
        <a href="https://github.com/vchan14/MyVueExamples" target="_blank">
          <img class="inline w-4" :src="githubIcon" alt="github icon" />
        </a>
        Made by vchan14©
      </p>
    </div>
    <div class="h-full w-full rounded border-2 border-gray-400">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.scrollable-area::-webkit-scrollbar {
  width: 3px; /* for vertical scrollbars */
  height: 3px; /* for horizontal scrollbars */
}

.scrollable-area:hover::-webkit-scrollbar-thumb {
  background: #999; /* darker gray color on hover */
}
</style>
