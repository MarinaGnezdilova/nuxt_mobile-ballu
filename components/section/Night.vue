<script setup lang="ts">
import { sections } from "../../storage/content/sections";
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
      <SectionTitle>
        <span
          v-for="(item, index) in sections.night.title"
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
