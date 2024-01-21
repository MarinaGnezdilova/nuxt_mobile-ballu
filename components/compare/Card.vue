
import type { NuxtPicture } from '#build/components';
<script setup lang="ts">
interface CardProperty {
  name: string,
  value: string
};
interface Card {
  card: {
    series: string,
    model: string,
    src: string,
    price: string,
    properties: CardProperty[],
  }
  active?: boolean
};
const props = withDefaults(defineProps<Card>(), {
  active: false,
})
</script>

<template>
  <div class="card__block">
    <div class="card" :class="{ 'card_active': active }">
        <NuxtPicture
            class="card_image-block"
            :src="card.src"
            :imgAttrs="{ alt:'Карточка товара', class:'card__image', loading: 'lazy' }" 
        />
      <div class="card__content">
        <div class="card__series" :class="{ 'card__content_active': active }">Серия {{ card?.series }}</div>
        <div class="card__model" :class="{ 'card__content_active': active }">{{ card?.model }}</div>
        <div v-for="(prop, index) in card?.properties" :key="index">
          <div class="card__prop" :class="{ 'card__content_active': active }">{{ prop.name }}</div>
          <p class="card__prop-value" :class="{ 'card__content_active': active }">{{ prop.value }}</p>
        </div>
      </div>
      <p :class="active ? 'card__price_active' : 'card__price'">{{ card?.price }}</p>
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
  width: 360px;
  height: 100%;
}

.card_active {
  background-color: var(--color-green);
}

.card_image-block {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--color-grey);
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

.card__series {
  font-size: 1.4em;
  font-weight: lighter;
  text-transform: uppercase;
}

.card__content_active {
  color: #fff;
}

.card__model {
  font-size: 3em;
  font-weight: lighter;
  text-transform: uppercase;
  margin-bottom: 35px;
}

.card__prop {
  font-size: 1.2em;
  text-transform: none;
  display: block;
  text-align: center;
  font-weight: lighter;
  margin-bottom: 10px;
}

.card__prop-value {
  font-size: 1.4em;
  font-weight: bolder;
  text-transform: none;
  margin-bottom: 30px;
}

.card__price {
  color: var(--color-blue);
  font-size: 3em;
  margin-top: 25px;
  margin-bottom: 25px;
  text-transform: none;
  text-align: center;
}

.card__price_active {
  color: #fff;
  font-size: 3em;
  margin-top: 25px;
  margin-bottom: 25px;
  text-transform: none;
  text-align: center;
}

@media screen and (max-width: 1500px) {
  .card__block {
    width: 300px;
  }

  .card__model {
    height: 100px;
  }
}

@media screen and (max-width: 1280px) {
  .card__block {
    width: 200px;
  }

  .card__series {
    font-size: 1.2em;
  }

  .card__model {
    font-size: 2.5em;
    height: 70px;
  }

  .card__price {
    font-size: 2.5em;
  }

  .card__price_active {
    font-size: 2.5em;
  }
}

@media screen and (max-width: 950px) {
  .card__block {
    width: 170px;
  }

  .card {
    margin-bottom: 30px;
  }

  .card__series {
    font-size: 1em;
  }

  .card__model {
    font-size: 1.8em;
    height: 40px;
  }

  .card__prop {
    font-size: 1em;
  }

  .card__prop-value {
    font-size: 1.2em;
  }

  .card__price {
    font-size: 1.6em;
  }

  .card__price_active {
    font-size: 1.6em;
  }
}

@media screen and (max-width: 750px) {
  .card__block {
    width: 220px;
  }

  .card__series {
    font-size: 0.8em;
  }

  .card__model {
    font-size: 1.3em;
  }
}

@media screen and (max-width: 500px) {
  .card {
    margin-bottom: 10px;
  }

  .card__series {
    font-size: 1em;
  }

  .card__prop {
    font-size: 0.8em;
  }

  .card__prop-value {
    font-size: 1em;
    margin-bottom: 20px;
  }

  .card__price {
    font-size: 1.8em;
  }

  .card__price_active {
    font-size: 1.8em;
  }
}

@media screen and (max-width: 380px) {
  .card__price {
    font-size: 1.5em;
  }

  .card__price_active {
    font-size: 1.5em;
  }
}</style>
