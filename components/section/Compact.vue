<script setup lang="ts">
import { sections } from '../../storage/content/sections';
</script>

<template>
    <Section :src="sections.compact.image" :id="sections.compact.name" :class="sections.compact.name" right>
        <template v-slot:title>
            <SectionTitle class="title-item title-item_rigth">
                <span 
                    v-for="(item, index) in sections.compact.title"
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
                <p v-for="item in sections.compact.text" class="pros__text pros__first-text_right">
                {{ item }}
                </p>
        </template>
    </Section>
</template>