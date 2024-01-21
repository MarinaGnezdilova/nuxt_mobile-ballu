<script setup lang="ts">
import { platinumSeries } from "../storage/series/platinum";
import { smartElectronic } from '../storage/series/smartElectronic';
import { smartMechanic } from '../storage/series/smartMechanic';
import { smartPro } from '../storage/series/smartPro';
import type { VNodeRef } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const leftDevicePlatinum = platinumSeries.slice(0, 2);
const rightDevicePlatinum = platinumSeries.slice(2);

const props = defineProps({
    parthnersBlockActive: Object,
    activeBlockByScroll: Function,
    hiddenBlock: Function
})

const emit = defineEmits(['clickButton']);
const first = 'first';
const second ='second';
const third = 'third';
const forth = 'forth';

const isPopupOpen = ref<boolean>(false);
const currentCity = ref<string>('');

const selectCity = (city: string): void => {
  isPopupOpen.value = true;
  currentCity.value = city;
};
const closePopup = (): void => {
  isPopupOpen.value = false;
};

const avto = ref<VNodeRef>('');
const silent = ref<VNodeRef>('');
const energoef = ref<VNodeRef>('');
const options = ref<VNodeRef>('');
const threeD = ref<VNodeRef>('');
const compact = ref<VNodeRef>('');
const dry = ref<VNodeRef>('');
const night = ref<VNodeRef>('');

const platinum = 'platinum';
const smart = 'smart';
const maximum = 'maximum';
const silentString = 'silent';
const energoString = 'energo';
const optionsString = 'four';
const threeDString = '3D';
const compactString = 'compact';
const dryString = 'dry';
const nightString = 'night';

useIntersectionObserver(
  avto,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      props.activeBlockByScroll(platinum, maximum);
      props.hiddenBlock(silentString);
    } else {
      props.hiddenBlock(maximum);
    }
  },
);
useIntersectionObserver(
  silent,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      props.activeBlockByScroll(platinum, silentString);
      props.hiddenBlock(maximum);
      props.hiddenBlock(energoString);
    } else {
      props.hiddenBlock(silentString);
    }
  },
);
useIntersectionObserver(
  energoef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      props.activeBlockByScroll(platinum, energoString)
      props.hiddenBlock(silentString);
    } else {
      props.hiddenBlock(energoString);
    }
  },
);
useIntersectionObserver(
  options,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      props.activeBlockByScroll(platinum, optionsString);
      props.hiddenBlock(energoString);
    } else {
      props.hiddenBlock(optionsString);
    }
  },
);
useIntersectionObserver(
  threeD,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      props.activeBlockByScroll(smart, threeDString);
      props.hiddenBlock(compactString);
    } else {
      props.hiddenBlock(threeDString);
    }
  },
);
useIntersectionObserver(
  compact,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      props.activeBlockByScroll(smart, compactString);
      props.hiddenBlock(threeDString);
      props.hiddenBlock(dryString);
    } else {
      props.hiddenBlock(compactString);
    }
  },
);
useIntersectionObserver(
  dry,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      props.activeBlockByScroll(smart, dryString);
      props.hiddenBlock(compactString);
      props.hiddenBlock(nightString);
    } else {
      props.hiddenBlock(dryString);
    }
  },
);
useIntersectionObserver(
  night,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      props.activeBlockByScroll(smart, nightString);
      props.hiddenBlock(dryString);
    } else {
      props.hiddenBlock(nightString);
    }
  },
);
</script>

<template>
    <IntroPlatinum />
    <SectionMaximum ref="avto"/>
    <SectionSilent ref="silent"/>
    <SectionEnergo ref="energoef"/>
    <SectionEffective />
    <SectionFour ref="options"/>
    <section v-if="platinumSeries.length > 0" class="compare">
    <SectionTitle class="title-item compare__title">
      <span @click="$emit('clickButton')">ТАБЛИЦА СРАВНЕНИЯ МОДЕЛЕЙ</span>
    </SectionTitle>
    <div class="compare__table">
      <div class="compare-column compare-column_left">
        <CompareCard v-for="card in leftDevicePlatinum" :key="card.model" :card="card" :active="card.model === 'BPHS-09H'">
          <CompareButtonBuy text="Купить на shop.ballu.ru" isForOfficalSite href="#" />
          <CompareButtonBuy text="Купить у  партнеров" @click="$emit('clickButton', first)" href="#countries"/>
        </CompareCard>
      </div>
      <div class="compare-column compare-column_right">
        <CompareCard v-for="card in rightDevicePlatinum" :key="card.model" :card="card">
          <CompareButtonBuy text="Купить на shop.ballu.ru" isForOfficalSite href="#" />
          <CompareButtonBuy text="Купить у  партнеров" @click="$emit('clickButton', first)" href="#countries"/>
        </CompareCard>
      </div>
    </div>
  </section>

  <section id="parthners">
    <div id="countries"></div>
    <ParthenerList :class="{ 'hidden' : !props.parthnersBlockActive[first] }" @clickCity="selectCity"/>
  </section>

    <IntroSmart />
    <SectionThreeD ref="threeD"/>
    <SectionCompact ref="compact"/>
    <SectionDry ref="dry"/>
    <SectionNight ref="night"/>
    <section v-if="smartElectronic.length > 0 || smartMechanic.length > 0 || smartPro.length > 0" class="compare">
    <SectionTitle class="title-item compare__title">
      <span>Таблица СРАВНЕНИЯ МОДЕЛЕЙ</span>
    </SectionTitle>
    <div class="compare__table">
      <div class="compare-column compare__smart-el">
        <CompareCard v-for="card in smartElectronic" :key="card.model" :card="card" :active="card.model === 'BPAC-07 CE_1'"
          class="compare_smart-el-card">
          <CompareButtonBuy text="Купить на shop.ballu.ru" isForOfficalSite href="#" />
          <CompareButtonBuy text="Купить у  партнеров" @click="$emit('clickButton', second)" href="#countries_smart" />
        </CompareCard>
      </div>
    </div>
    <section id="parthners">
    <div id="countries_smart"></div>
    <ParthenerList :class="{ 'hidden'  : !props.parthnersBlockActive[second]}" @clickCity="selectCity"/>
    </section>

    <div class="compare__table">
      <div class="compare-column compare-mechanic-block">
        <CompareCard v-for="card in smartMechanic" :key="card.model" :card="card">
          <CompareButtonBuy text="Купить на shop.ballu.ru" isForOfficalSite href="#" />
          <CompareButtonBuy text="Купить у  партнеров" @click="$emit('clickButton', third)" href="#countries_smart-mechanic" />
        </CompareCard>
      </div>
    </div>
    <section id="countries_smart-mechanic">
    <div id="countries"></div>
    <ParthenerList :class="{ 'hidden': !props.parthnersBlockActive[third] }" @clickCity="selectCity"/>
    </section>

    <div class="compare__table ">
      <div class="compare-column compare-pro__block">
        <CompareCard v-for="card in smartPro" :key="card.model" :card="card">
          <CompareButtonBuy text="Купить на shop.ballu.ru" isForOfficalSite href="#" />
          <CompareButtonBuy text="Купить у  партнеров" @click="$emit('clickButton', forth)" href="#countries_smart-pro" />
        </CompareCard>
      </div>
    </div>
    <section id="parthners">
    <div id="countries_smart-pro"></div>
    <ParthenerList :class="{ 'hidden' : !props.parthnersBlockActive[forth] }" @clickCity="selectCity"/>
    </section>
  </section>
    <SectionOthers />
    <FooterBlock />
    <ParthenerPopup :class="{ 'popup_hidden': !isPopupOpen }" :selectedCity="currentCity" @close="closePopup"/>
</template>

<style>
.title-item {
  width: 65%;
  font-size: 3.8em;
  text-transform: uppercase;
  font-weight: lighter;
  margin-top: 70px;
  line-height: 1;
}

.compare__title {
  margin-top: 30px;
}

.compact__title {
  width: 100%;
}

.compare__title {
  width: 100%;
  text-align: center;
}

.compare {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.compare__table {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
}

.compare-column {
  display: flex;
}

.compare-column_left {
  margin-right: 25px;
}

.compare-column_right {
  margin-left: 25px;
}

.compare__card-block {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.compare-mechanic-block {
  margin-top: 0;
}

.compare__smart-el-block {
  margin-bottom: 50px;
  margin-bottom: 0;
}

.hidden {
  display: none;
}

@media screen and (max-width: 1280px) {
  .title-item {
    font-size: 2.5em;
  }
}

@media screen and (max-width: 950px) {
  .other__row {
    flex-direction: column;
  }

  .title-item {
    font-size: 1.8em;
  }

  .compare__table {
    margin-top: 30px;
    margin-bottom: 70px;
  }

  .compare-column_left {
    margin-right: 15px;
  }

  .compare-column_right {
    margin-left: 15px;
  }

  .compare-pro__block {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 750px) {
  .title-item {
    font-size: 1.2em;
    width: 65%;
    margin-top: 20px;
  }

  .compare__table {
    flex-direction: column;
    align-items: center;
  }

  .compare-column_left {
    margin-right: 0;
  }

  .compare-column_right {
    margin-left: 0;
  }

  .compare__smart-el {
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
  }

  .parthners {
    margin-left: 8.85%;
  }
}

@media screen and (max-width: 500px) {
  .title-item {
    font-size: 0.8em;
  }

  .section__content {
    left: 2%;
  }

  .card__model {
    font-size: 1.8em;
  }

  .compare__table {
    margin-bottom: 30px;
  }

  .compare-column_left {
    display: grid;
    grid-template-columns: 1fr;
  }

  .compare-column_right {
    display: grid;
    grid-template-columns: 1fr;
  }

  .compare-mechanic-block {
    display: flex;
    flex-direction: column;
  }

  .compare-pro__block {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 380px) {
  .title-item {
    margin-top: 21px;
    font-size: 0.7em;
  }
}

</style>