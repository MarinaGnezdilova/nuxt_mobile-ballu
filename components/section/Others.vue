<script setup lang="ts">
import { otherItems } from "../../storage/content/other";
</script>

<template>
  <section class="otherSection">
    <SectionTitle>
      <div class="otherSection__title">ДРУГАЯ ПРОДУКЦИЯ BALLU</div>
    </SectionTitle>
    <div class="otherSection__list">
      <OtherItem
        v-for="(item, index) in otherItems"
        :key="index"
        :src="item.image"
        :title="item.title"
        :gridArea="item.gridArea"
        href="#"
      />
    </div>
  </section>
</template>

<style>
.otherSection {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.otherSection__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.otherSection__title {
  margin-bottom: 60px;
  width: 100%;
  text-align: center;
}

@media screen and (max-width: 1440px) {
  .otherSection__list {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "a b c"
      "d e f";
  }

  .d {
    grid-area: e;
  }
}

@media screen and (max-width: 1024px) {
  .otherSection__title {
    margin-bottom: 40px;
  }

  .otherSection__list {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-template-areas: "a b c d";
  }

  .d {
    grid-area: d;
  }
}

@media screen and (max-width: 768px) {
  .otherSection__list {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "a b c"
      "d e f";
  }

  .d {
    grid-area: e;
  }
}
</style>
