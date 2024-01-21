<script setup lang="ts">
import { ref } from 'vue';
import { countriesAndCitiesArray } from '../../utils/cities';
interface CountryAndCities {
  country: string,
  isCountryActive: boolean,
  cities: string[][]
};

const countries = ref<CountryAndCities[]>(
  countriesAndCitiesArray
);
const hadleClick = (event: Event) => {
  let currentCountryIndex = countries.value.findIndex(el => el.isCountryActive === true);
  countries.value[currentCountryIndex].isCountryActive = false;
  let clickCountryIndex = countries.value.findIndex(el => el.country === (event.target as HTMLInputElement).innerText.toLowerCase());
  countries.value[clickCountryIndex].isCountryActive = true;
}
const emit = defineEmits(['clickCity']);
</script>

<template>
  <div class="parthners__block">
    <div class="contries">
      <div class="countries__country" v-for="country in countries" :key="country.country" @click="hadleClick"
        :class="{ 'countries__country_active ': country.isCountryActive }">
        {{ country.country }}
      </div>
    </div>
    <div class="cities__block" v-for="country in countries" :key="country.country"
      :class="{ 'hidden': !country.isCountryActive }">
      <div class="cities">
        <div v-for="(item, index) in country.cities" class="cities__item" :key="index">
          <p class="cities__letter">{{ item[0][0] }}</p>
          <ul class="cities__list">
            <li v-for="(city, index) in item" class="cities__city" @click="$emit('clickCity', city)" :key="index">
              {{ city }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.parthners__block {
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 30px;
}

.contries {
  display: flex;
  z-index: 5;
}

.countries__country {
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

.countries__country_active {
  background-color: #fff;
  border-bottom: none;
  color: var(--color-green);
}

.cities__block {
  padding-top: 30px;
  border: 1px solid var(--color-grey);
  padding-left: 30px;
  width: 100%;
  transform: translateY(-2px);
}

.cities {
  margin: auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 30px;
}

.cities__item {
  display: flex;
  height: fit-content;
  margin-bottom: 20px;
}

.cities__letter {
  display: flex;
  width: 30px;
  height: 30px;
  color: #fff;
  background-color: var(--color-green);
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 1.3em;
  font-weight: bold;
  text-transform: uppercase;
}

.cities__list {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.cities__city {
  list-style: none;
  font-size: 1.2em;
  cursor: pointer;
  text-transform: capitalize;
}

.cities__city:hover {
  border-bottom: 1px solid var(--color-grey);
}

@media screen and (max-width: 1280px) {
  .countries__country {
    font-size: .8em;
    margin-right: 3px;
    height: 37px;
  }

  .cities__block {
    top: 36px;
  }

  .cities {
    grid-template-columns: repeat(2, 1fr);
  }

  .cities__letter {
    font-size: 1.2em;
  }

  .cities__city {
    font-size: 1em;
  }
}

@media screen and (max-width: 950px) {
  .countries__country {
    font-size: .7em;
    margin-right: 2px;
    height: 33px;
  }

  .cities__block {
    top: 32px;
  }

  .cities__letter {
    font-size: 1em;
  }

  .cities__city {
    font-size: .9em;
  }
}

@media screen and (max-width: 750px) {
  .contries {
    width: 80%;
    flex-wrap: wrap;
  }

  .cities__block {
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  .countries__country {
    font-size: .5em;
    height: 25px;
  }

  .cities__block {
    top: 25px;
  }

  .cities {
    margin-top: 20px;
    grid-template-columns: 1fr;
    margin-top: 30px;
  }

  .cities__letter {
    font-size: .8em;
  }

  .cities__city {
    font-size: .9em;
  }
}</style>
