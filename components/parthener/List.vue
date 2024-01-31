<script setup lang="ts">
import { ref } from "vue";
import { countriesAndCitiesArray } from "../../utils/cities";
interface GeoData {
  country: string;
  isCountryActive: boolean;
  cities: string[][];
}

const countries = ref<GeoData[]>(countriesAndCitiesArray);
const hadleClick = (event: Event) => {
  let currentCountryIndex = countries.value.findIndex(
    (el) => el.isCountryActive === true
  );
  countries.value[currentCountryIndex].isCountryActive = false;
  let clickCountryIndex = countries.value.findIndex(
    (el) =>
      el.country === (event.target as HTMLInputElement).innerText.toLowerCase()
  );
  countries.value[clickCountryIndex].isCountryActive = true;
};
const emit = defineEmits(["clickCity"]);
</script>

<template>
  <div class="parthners">
    <div class="parthners__contries">
      <div
        class="parthners__country"
        v-for="country in countries"
        :key="country.country"
        @click="hadleClick"
        :class="{ 'active ': country.isCountryActive }"
      >
        {{ country.country }}
      </div>
    </div>
    <div
      class="parthners__countryBlock"
      v-for="country in countries"
      :key="country.country"
      :class="{ hidden: !country.isCountryActive }"
    >
      <div class="parthners__citiesBlock">
        <div
          v-for="(item, index) in country.cities"
          class="parthners__cityBlock"
          :key="index"
        >
          <p class="parthners__letter">{{ item[0][0] }}</p>
          <ul class="parthners__list">
            <li
              v-for="(city, index) in item"
              class="parthners__city"
              @click="$emit('clickCity', city)"
              :key="index"
            >
              {{ city }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.parthners {
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 30px;
}

.parthners__contries {
  display: flex;
  z-index: 5;
}

.parthners__country {
  display: flex;
  align-items: center;
  padding: 0 3px;
  width: max-content;
  height: 40px;
  background-color: #f4f4f4;
  border: 1px solid var(--color-grey);
  text-transform: uppercase;
  margin-right: 5px;
  cursor: pointer;
}

.parthners__country.active {
  background-color: #fff;
  border-bottom: none;
  color: var(--color-green);
}

.parthners__countryBlock {
  padding-top: 30px;
  border: 1px solid var(--color-grey);
  padding-left: 30px;
  width: 100%;
  transform: translateY(-2px);
}

.parthners__citiesBlock {
  margin: auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 30px;
}

.parthners__cityBlock {
  display: flex;
  height: fit-content;
  margin-bottom: 20px;
}

.parthners__letter {
  display: flex;
  width: 30px;
  height: 30px;
  color: #fff;
  background-color: var(--color-green);
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
}

.parthners__list {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.parthners__city {
  list-style: none;
  font-size: 20px;
  cursor: pointer;
  text-transform: capitalize;
}

.parthners__city:hover {
  border-bottom: 1px solid var(--color-grey);
}

@media screen and (max-width: 1280px) {
  .parthners__country {
    font-size: 12px;
    margin-right: 3px;
    height: 37px;
  }

  .parthners__countryBlock  {
    top: 36px;
  }

  .parthners__citiesBlock {
    grid-template-columns: repeat(2, 1fr);
  }

  .parthners__letter {
    font-size: 20px;
  }

  .parthners__city {
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .parthners__country {
    font-size: 10px;
    margin-right: 2px;
    height: 33px;
  }

  .parthners__countryBlock {
    top: 32px;
  }

  .parthners__letter {
    font-size: 16px;
  }

  .parthners__city {
    font-size: 14px;
  }
}

@media screen and (max-width: 768px) {
  .parthners__contries {
    width: 80%;
    flex-wrap: wrap;
  }

  .parthners__citiesBlock {
    width: 100%;
  }
}

@media screen and (max-width: 425px) {
  .parthners__country {
    font-size: 8px;
    height: 25px;
  }

  .parthners__countryBlock {
    top: 25px;
  }

  .parthners__citiesBlock {
    margin-top: 20px;
    grid-template-columns: 1fr;
    margin-top: 30px;
  }

  .parthners__letter {
    font-size: 12px;
  }

  .parthners__city {
    font-size: 14px;
  }
}
</style>
