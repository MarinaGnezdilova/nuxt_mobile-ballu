<script setup lang="ts">
import { sections } from "../../storage/content/sections";
import { useIntersectionObserver } from "@vueuse/core";
import type { VNodeRef } from "vue";

let isVisible = ref<boolean>(false);
const title = ref<VNodeRef>("");

useIntersectionObserver(title, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
});
</script>

<template>
  <Section
    :src="sections.four.image"
    :id="sections.four.name"
    :class="sections.four.name"
    :text="sections.compact.text"
  >
    <template v-slot:title>
      <SectionTitle ref="title">
        <span
          v-for="(item, index) in sections.four.title"
          :key="index"
          :class="isVisible ? `fadeUp delay${index}` : ''"
        >
          {{ item }}
        </span>
      </SectionTitle>
    </template>
  </Section>
</template>
