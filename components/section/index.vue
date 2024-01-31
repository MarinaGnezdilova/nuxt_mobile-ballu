<script setup lang="ts">
interface Section {
  src: string;
  right?: boolean;
  text: Object;
}
const props = withDefaults(defineProps<Section>(), {
  right: false,
});
</script>

<template>
  <section class="section">
    <NuxtPicture
      class="section__picture"
      :src="src"
      :imgAttrs="{
        alt: 'Фоновое изображение блока',
        class: 'section__image',
        loading: 'lazy',
      }"
    />
    <div class="section__content" :class="{ 'right': right }">
      <slot name="title" />
      <div class="section__block" :class="{ 'right': right }">
        <p v-for="item in text" class="section__text">
          {{ item }}
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.section__text {
  display: block;
  font-size: 22px;
  line-height: 1.2;
  margin-top: 15px;
  width: 100%;
  margin-top: 30px;
}

.section {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 30px;
}

.section__picture {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.section__image {
  width: 100%;
}

.section__content {
  position: absolute;
  top: 3%;
  left: 8.85%;
}

.section__content.right {
  left: 57%;
}

.section__block {
  display: flex;
  flex-direction: column;
  width: 38%;
}

.section__block.right {
  width: 85%;
  margin-right: 15px;
}

@media screen and (max-width: 1920px) {
  .section__block {
    width: 50%;
    background-color: rgb(255, 255, 255, 0.7);
  }

  .section__block.right {
    width: 95%;
    }
}

@media screen and (max-width: 1280px) {
  .section__block.right {
    width: 90%;
  }

  .section__text {
    font-size: 16px;
    width: 100%;
  }
}

@media screen and (max-width: 1024px) {
    .section__content {
        top: 0;
    }
  .section__text {
    font-size: 14px;
    color: #0c0d0d;
  }
}

@media screen and (max-width: 768px) {
    .section__block {
        width: 70%;
    }
    .section__content.right {
        left: 40%;
    }
  .section__block.right {
    width: 98%;
  }
  .section__text {
    margin-top: 5px;
    font-size: 10px;
  }
}

@media screen and (max-width: 425px) {
  .section__block {
    width: 80%;
  }

  .section__block.right {
    width: 80%;
  }

  .section__text {
    margin-top: 5px;
  }
}

@media screen and (max-width: 375px) {
  .section__text {
    font-size: 8px;
  }
}
</style>
