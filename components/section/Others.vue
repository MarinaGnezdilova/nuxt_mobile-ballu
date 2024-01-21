<script setup lang="ts">
import { otherItems } from '../../storage/content/other';
</script>

<template>
  <section class="other">
    <SectionTitle class="other__title">
      <div>ДРУГАЯ ПРОДУКЦИЯ BALLU</div>
    </SectionTitle>
    <div class="other__list">
      <OtherItem v-for="(item, index) in otherItems" :key="index" :src="item.image" :title="item.title"
        :gridArea="item.gridArea" href="#" />
    </div>
  </section>
</template>

<style>
.other {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.other__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.other__title {
  margin-bottom: 60px;
  width: 100%;
  text-align: center;
  font-size: 3.2em;
  text-transform: uppercase;
  font-weight: lighter;
}

@media screen and (max-width: 1650px) {
  .other__list {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "a b c"
      "d e f"
  }

  .d {
    grid-area: e;
  }
}

@media screen and (max-width: 1280px) {
  .other__title {
    font-size: 2.5em;
  }
}

@media screen and (max-width: 950px) {
  .other__title {
    font-size: 1.8em;
    margin-bottom: 40px;
  }

  .other__list {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-template-areas:
      "a b c d"
  }

  .d {
    grid-area: d;
  }
}

@media screen and (max-width: 750px) {
  .other__list {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "a b c"
      "d e f"
  }

  .d {
    grid-area: e;
  }

  .other__title {
    font-size: 1.2em;
    width: 65%;
  }
}

@media screen and (max-width: 500px) {
  .other__title {
    font-size: 0.8em;
  }
}

@media screen and (max-width: 380px) {
  .other__title {
    font-size: 0.7em;
  }
}</style>