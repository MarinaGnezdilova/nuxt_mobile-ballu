<script setup lang="ts">
    interface Section {
        src: string,
        right?: boolean
    };
    const props = withDefaults(defineProps<Section>(), {
        right: false,
    });
</script>
    
<template>
    <section class="section">
        <NuxtPicture 
            class="section-picture"
            :src="src"
            :imgAttrs="{alt:'Фоновое изображение блока', class:'section-image', loading:'lazy'}"
        />
        <div class="section__content" :class="{ 'section__content_right': right }">
            <slot name="title" />
            <div class="pros__block" :class="{ 'pros__block_right': right }">
                <slot name="text" />
            </div>
        </div>
    </section>
</template>

<style>
    .section {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 30px;
    }

    .section-picture {
        width: 100%;
        height: 100%;
        display: flex;
        overflow: hidden;
    }

    .section-image {
        width: 100%;
    }

    .section__content {
        position: absolute;
        top: 3%;
        left: 8.85%;
    }

    .section__content_right {
        left: 57%;
    }

    .pros__block {
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    .pros__block_right {
        width: 95%;
        margin-right: 15px;
    }

    
    @media screen and (max-width: 1650px) {
        .pros__block {
            background-color: rgb(255, 255, 255, 0.7);
        }
    }

    @media screen and (max-width: 1280px) {
        .pros__block {
            width: 50%;
        }

        .pros__block_right {
            width: 90%;
        }
    }

    @media screen and (max-width: 750px) {
        .pros__block {
            width: 75%;
        }

        .pros__block_right {
            width: 100%;
        }
    }

    @media screen and (max-width: 500px) {
        .section__content_right {
            left: 50%;
        }

        .pros__block {
            width: 75%;
        }

        .pros__block_right {
            width: 100%;
        }
    }

    @media screen and (max-width: 380px) {
        .section__content_right {
            left: 40%;
        }

        .pros__block {
            width: 85%;
        }

        .pros__block_right {
            width: 100%;
        }
    }
</style>