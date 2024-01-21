<script setup lang="ts">
interface OtheItem {
  src: string,
  title: string,
  href: string,
  gridArea: string
}
const props = withDefaults(defineProps<OtheItem>(), {
});
</script>

<template>
  <NuxtLink class="other__item" :to="href" :class="gridArea">
    <div class="other__block">
        <NuxtPicture
             :src="src"
             class="other__picture"
             :imgAttrs="{ alt:'Другая продукция', class:'other__image', loading: 'lazy' }" 
        />
    </div>
    <slot name="default" />
    <div class="other__title-item"> {{ title }}</div>
</NuxtLink>
</template>

<style>
.other__item {
  width: 350px;
  margin-right: 15px;
  cursor: pointer;
  text-decoration: none;
}

.other__item:last-child {
  margin-right: 0px;
}

.other__block {
  background-color: #f4f4f4;
  position: relative;
  width: 100%;
}

.other__block:after {
  content: '';
  height: 5px;
  width: 0;
  background: var(--color-green);
  display: block;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
}

.other__block:hover::after {
  width: 100%;
}

.other__picture {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.other__image {
  width: 100%;
}

.other__title-item {
  text-transform: uppercase;
  font-weight: lighter;
  text-align: center;
  font-size: 1.2em;
  margin-top: 15px;
}

@media screen and (max-width: 1280px) {
  .other__item {
    width: 150px;
  }

  .other__title-item {
    font-size: 1em;
  }
}

@media screen and (max-width: 750px) {}

@media screen and (max-width: 500px) {
  .other__title-item {
    font-size: 0.7em;
  }

  .other__item {
    width: 100px;
  }

  .other__block:after {
    height: 2px;
  }
}

@media screen and (max-width: 380px) {
  .other__title-item {
    font-size: .5em;
  }

  .other__item {
    width: 70px;
  }
}</style>