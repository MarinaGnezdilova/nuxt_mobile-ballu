<script setup lang="ts">
import { sections } from "../../storage/content/sections";
</script>

<template>
  <Section
    :src="sections.four.image"
    :id="sections.four.name"
    :class="sections.four.name"
    :text="sections.compact.text"
  >
    <template v-slot:title>
      <SectionTitle>
        <span
          v-for="(item, index) in sections.four.title"
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
