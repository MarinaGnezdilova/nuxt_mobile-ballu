<script setup lang="ts">
import { sections } from "../../storage/content/sections";
</script>

<template>
  <Section
    :src="sections.silent.image"
    :id="sections.silent.name"
    :class="sections.silent.name"
    :text="sections.compact.text"
    right
  >
    <template v-slot:title>
      <SectionTitle>
        <span
          v-for="(item, index) in sections.silent.title"
          :key="index"
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
