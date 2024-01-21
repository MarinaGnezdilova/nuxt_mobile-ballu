<script setup lang="ts">
import { sections } from '../../storage/content/sections';
</script>

<template>
    <Section :src="sections.four.image" :id="sections.four.name" :class="sections.four.name">
        <template v-slot:title>
            <SectionTitle class="title-item">
                <span 
                    v-for="(item, index) in sections.four.title"
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
                <p v-for="item in sections.four.text" class="pros__text">
                {{ item }}
                </p>
        </template>
    </Section>
</template>