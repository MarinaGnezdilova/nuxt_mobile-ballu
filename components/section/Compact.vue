<script setup lang="ts">
import { sections } from "../../storage/content/sections";
</script>

<template>
  <Section
    :src="sections.compact.image"
    :id="sections.compact.name"
    :class="sections.compact.name"
    :text="sections.compact.text"
    right
  >
    <template v-slot:title>
      <SectionTitle>
        <span
          v-for="(item, index) in sections.compact.title"
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
