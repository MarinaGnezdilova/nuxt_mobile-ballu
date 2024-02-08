import type { NuxtPicture } from '#build/components';
<script setup lang="ts">
interface CardProperty {
  name: string;
  value: string;
};
interface Card {
  card: {
    series: string;
    model: string;
    src: string;
    price: string;
    properties: CardProperty[];
  };
  active?: boolean;
};
const props = withDefaults(defineProps<Card>(), {
  active: false,
});
</script>

<template>
  <div class="card__block">
    <div class="card" :class="{ active: active }">
      <NuxtPicture
        class="card__imageBlock"
        :class="{ active: active }"
        :src="card.src"
        :imgAttrs="{
          alt: 'Карточка товара',
          class: 'card__image',
          loading: 'lazy',
        }"
      />
      <div class="card__content" :class="{ active: active }">
        <div class="card__series" :class="{ active: active }">
          Серия {{ card.series }}
        </div>
        <div class="card__model" :class="{ active: active }">
          {{ card?.model }}
        </div>
        <div v-for="(prop, index) in card.properties" :key="index">
          <div class="card__prop" :class="{ active: active }">
            {{ prop.name }}
          </div>
          <p class="card__propValue" :class="{ active: active }">
            {{ prop.value }}
          </p>
        </div>
      </div>
      <p class="card__price" :class="{ active: active }">
        {{ card.price }}
      </p>
    </div>
    <slot name="default" />
  </div>
</template>

<style>
.card {
  width: 100%;
  border: 1px solid var(--color-light-grey);
  padding: 8px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
}

.card__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  height: 100%;
}

.card.active {
  background-color: var(--color-green);
}

.card__imageBlock {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--color-grey);
}

.card__imageBlock.active {
  border-bottom: 1px solid #fff;
}

.card__image {
  width: 90%;
}

.card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  border-bottom: 1px solid var(--color-grey);
}

.card__content.active {
  border-bottom: 1px solid #fff;
}

.card__series {
  font-size: 22px;
  font-weight: lighter;
  text-transform: uppercase;
}

.card__series.active {
  color: #fff;
}

.card__model {
  font-size: 46px;
  font-weight: lighter;
  text-transform: uppercase;
  margin-bottom: 35px;
}

.card__model.active {
  color: #fff;
}

.card__prop {
  font-size: 20px;
  text-transform: none;
  display: block;
  text-align: center;
  font-weight: lighter;
  margin-bottom: 10px;
}

.card__prop.active {
  color: #fff;
}

.card__propValue {
  font-size: 22px;
  font-weight: bolder;
  text-transform: none;
  margin-bottom: 30px;
}

.card__propValue.active {
  color: #fff;
}

.card__price {
  color: var(--color-blue);
  font-size: 46px;
  margin-top: 25px;
  margin-bottom: 25px;
  text-transform: none;
  text-align: center;
}

.card__price.active {
  color: #fff;
}

@media screen and (max-width: 1440px) {
  .card__block {
    width: 300px;
  }

  .card__model {
    height: 100px;
  }
}

@media screen and (max-width: 1280px) {
  .card__block {
    width: 220px;
  }

  .card__series {
    font-size: 16px;
  }

  .card__model {
    font-size: 38px;
    height: 70px;
  }

  .card__price {
    font-size: 38px;
  }

  .card__price--active {
    font-size: 38px;
  }
}

@media screen and (max-width: 1024px) {
  .card__block {
    width: 170px;
  }

  .card {
    margin-bottom: 30px;
  }

  .card__series {
    font-size: 14px;
  }

  .card__model {
    font-size: 28px;
    height: 40px;
  }

  .card__prop {
    font-size: 14px;
  }

  .card__propValue {
    font-size: 16px;
  }

  .card__price {
    font-size: 28px;
  }

  .card__price--active {
    font-size: 28px;
  }
}

@media screen and (max-width: 768px) {
  .card__block {
    width: 200px;
  }

  .card__series {
    font-size: 14px;
  }

  .card__model {
    font-size: 22px;
  }
}

@media screen and (max-width: 425px) {
  .card {
    margin-bottom: 10px;
  }

  .card__series {
    font-size: 16px;
  }

  .card__prop {
    font-size: 14px;
  }

  .card__propValue {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .card__price {
    font-size: 28px;
  }

  .card__price--active {
    font-size: 28px;
  }
}

@media screen and (max-width: 375px) {
  .card__price {
    font-size: 25px;
  }

  .card__price--active {
    font-size: 25px;
  }
}
</style>
