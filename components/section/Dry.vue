<script setup lang="ts">
import { sections } from '../../storage/content/sections';
</script>

<template>
    <Section :src="sections.dry.image" :id="sections.dry.name" :class="sections.dry.name">
        <template v-slot:title>
            <SectionTitle class="title-item">
                <span 
                    v-for="(item, index) in sections.dry.title"
                    :key="index"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    :data-aos-delay="300*index"
                >
                {{ item }}
                </span>
            </SectionTitle>
        </template>
        <template v-slot:text>
                <p v-for="item in sections.dry.text" class="pros__text">
                {{ item }}
                </p>
        </template>
    </Section>
</template>