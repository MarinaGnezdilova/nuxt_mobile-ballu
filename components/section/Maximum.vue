<script setup lang="ts">
import { sections } from "../../storage/content/sections";
</script>

<template>
  <Section
    :src="sections.maximum.image"
    :id="sections.maximum.name"
    :class="sections.maximum.name"
    :text="sections.maximum.text"
  >
    <template v-slot:title>
      <SectionTitle>
        <span
          v-for="(item, index) in sections.maximum.title"
          :key="index"
          class="element"
          data-aos="fade-up"
          data-aos-duration="1500"
          :data-aos-delay="300 * index"
        >
          {{ item }}
        </span>
      </SectionTitle>
    </template>
  </Section>
</template>

<style>

</style>
