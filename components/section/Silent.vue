<script setup lang="ts">
import { sections } from '../../storage/content/sections';
</script>

<template>
    <Section :src="sections.silent.image" :id="sections.silent.name" :class="sections.silent.name" right>
        <template v-slot:title>
            <SectionTitle class="title-item title-item_rigth">
                <span 
                    v-for="(item, index) in sections.silent.title"
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
                <p v-for="item in sections.silent.text" class="pros__text pros__first-text_right">
                {{ item }}
                </p>
        </template>
    </Section>
</template>

<style>
.title-item_rigth {
  width: 100%;
}

.pros__first-text {
  width: 50%;
  margin-bottom: 15px;
}

.pros__first-text_right {
  width: 100%;
}
</style>