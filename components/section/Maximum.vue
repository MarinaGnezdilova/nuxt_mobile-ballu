<script setup lang="ts">
import { sections } from '../../storage/content/sections';
</script>

<template>
    <Section :src="sections.maximum.image" :id="sections.maximum.name" :class="sections.maximum.name">
        <template v-slot:title>
            <SectionTitle class="title-item">
                <span 
                    v-for="(item, index) in sections.maximum.title"
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
                <p v-for="item in sections.maximum.text" class="pros__text">
                {{ item }}
                </p>
        </template>
    </Section>
</template>

<style>
.pros__text {
    display: block;
    font-size: 1.3em;
    line-height: 1.2;
    margin-top: 15px;
    width: 100%;
    margin-top: 30px;
}

@media screen and (max-width: 1280px) {
    .pros__text {
        font-size: 1em;
        width: 100%;
    }
}

@media screen and (max-width: 950px) {
    .pros__text {
        font-size: .85em;
        color: #0c0d0d;
    }
}

@media screen and (max-width: 750px) {
    .pros__text {
        font-size: .65em;
    }
}

@media screen and (max-width: 500px) {
    .pros__text {
        font-size: .55em;
        margin-top: 5px;
    }
}

@media screen and (max-width: 500px) {
    .pros__text {
        font-size: .45em;
    }
}</style>