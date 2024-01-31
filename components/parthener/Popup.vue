<script setup lang="ts">
import { parthnersBalakovo } from "../../storage/parthener/contact";
interface City {
  selectedCity: string;
}
const props = withDefaults(defineProps<City>(), {});
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="popup" @click.self="$emit('close')">
    <div class="popup__container">
      <div class="popup__city">{{ selectedCity }}</div>
      <button class="popup__buttonClose" @click="$emit('close')"></button>
      <ul class="popup__list">
        <li
          v-for="(item, index) in parthnersBalakovo"
          :key="index"
          class="popup__item"
        >
          <p class="popup__parthner">{{ item.name }}</p>
          <p v-if="item.site" class="popup__link">{{ item.site }}</p>
          <p v-if="item.address" class="popup__about">
            Адрес:{{ item.address }}
          </p>
          <p v-if="item.contacts" class="popup__about">
            Тел.: {{ item.contacts }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(103, 105, 109, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
}

.popup__container {
  width: 30%;
  background-color: #fff;
  position: relative;
  z-index: 5;
}

.popup__city {
  font-size: 32px;
  font-weight: lighter;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
  text-transform: capitalize;
}

.popup__buttonClose {
  width: 32px;
  height: 32px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 5px;
  background-color: transparent;
  border: none;
}

.popup__buttonClose::before {
  content: "";
  width: 1px;
  height: 32px;
  position: absolute;
  top: 0;
  left: 14px;
  background-color: var(--color-green);
  transform: rotate(45deg);
}

.popup__buttonClose::after {
  content: "";
  width: 1px;
  height: 32px;
  position: absolute;
  top: 0;
  left: 14px;
  background-color: var(--color-green);
  transform: rotate(-45deg);
}

.popup__list {
  list-style: none;
  padding-left: 20px;
  padding-bottom: 40px;
}

.popup__item {
  margin-bottom: 15px;
}

.popup__parthner {
  font-size: 24px;
  color: var(--color-green);
}

.popup__link {
  font-size: 24px;
  color: var(--color-blue);
}

.popup__about {
  font-size: 20px;
  display: block;
  margin-bottom: 5px;
}

@media screen and (max-width: 1280px) {
  .popup__city {
    font-size: 28px;
  }

  .popup__parthner {
    font-size: 22px;
  }

  .popup__link {
    font-size: 22px;
  }

  .popup__about {
    font-size: 18px;
  }

  .popup__buttonClose::before {
    height: 24px;
  }

  .popup__buttonClose::after {
    height: 24px;
  }
}

@media screen and (max-width: 1024px) {
  .popup__city {
    font-size: 26px;
  }

  .popup__parthner {
    font-size: 20px;
  }

  .popup__link {
    font-size: 20px;
  }

  .popup__about {
    font-size: 14px;
  }

  .popup__container {
    width: 40%;
  }

  .popup__buttonClose::before {
    height: 20px;
    top: -5px;
    left: 20px;
  }

  .popup__buttonClose::after {
    height: 20px;
    top: -5px;
    left: 20px;
  }

  .popup__list {
    padding-bottom: 25px;
  }
}

@media screen and (max-width: 768px) {
  .popup__city {
    font-size: 22px;
  }

  .popup__parthner {
    font-size: 18px;
  }

  .popup__link {
    font-size: 18px;
  }

  .popup__about {
    font-size: 12px;
  }

  .popup__container {
    width: 50%;
  }
}

@media screen and (max-width: 425px) {
  .popup__container {
    width: 63%;
  }

  .popup__city {
    font-size: 20px;
  }

  .popup__parthner {
    font-size: 16px;
  }

  .popup__link {
    font-size: 16px;
  }

  .popup__about {
    font-size: 10px;
  }
}
</style>
