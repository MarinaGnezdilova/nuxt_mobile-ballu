<script setup lang="ts">
import { sections } from "../../storage/content/sections";
</script>

<template>
  <Section
    :src="sections.threeD.image"
    :id="sections.threeD.name"
    :class="sections.threeD.name"
    :text="sections.compact.text"
  >
    <template v-slot:title>
      <SectionTitle>
        <span
          v-for="(item, index) in sections.threeD.title"
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
