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
    :src="sections.night.image"
    :id="sections.night.name"
    :class="sections.night.name"
    :text="sections.compact.text"
    right
  >
    <template v-slot:title>
      <SectionTitle ref="title">
        <span
          v-for="(item, index) in sections.night.title"
          :key="index"
          :class="isVisible ? `fadeUp delay${index}` : ''"
        >
          {{ item }}
        </span>
      </SectionTitle>
    </template>
  </Section>
</template>
