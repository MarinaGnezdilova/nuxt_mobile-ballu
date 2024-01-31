<script setup lang="ts">
import { sections } from "../../storage/content/sections";
</script>

<template>
  <Section
    :src="sections.effective.image"
    :id="sections.effective.name"
    :class="sections.effective.name"
    :text="sections.compact.text"
    right
  >
    <template v-slot:title>
      <SectionTitle>
        <span
          v-for="(item, index) in sections.effective.title"
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
