<script setup lang="ts">
import { platinumSeries } from "../storage/series/platinum";
import { smartElectronic } from "../storage/series/smartElectronic";
import { smartMechanic } from "../storage/series/smartMechanic";
import { smartPro } from "../storage/series/smartPro";
import type { VNodeRef } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { badgesPlatinum } from "../storage/badges/platinum";
import { badgesSmart } from "../storage/badges/smart";

const leftDevicePlatinum = platinumSeries.slice(0, 2);
const rightDevicePlatinum = platinumSeries.slice(2);

const props = defineProps({
  parthnersBlockActive: Object,
  activeBlockByScroll: Function,
  hiddenBlock: Function,
});

const emit = defineEmits(["clickButton"]);
const first = "first";
const second = "second";
const third = "third";
const forth = "forth";

const isPopupOpen = ref<boolean>(false);
const currentCity = ref<string>("");
let isVisiblePlatinum = ref<boolean>(false);
let isVisibleSmart = ref<boolean>(false);
let isVisibleBadgePlatinum = ref<boolean>(false);
let isVisibleBadgeSmart = ref<boolean>(false);

const selectCity = (city: string): void => {
  isPopupOpen.value = true;
  currentCity.value = city;
};
const closePopup = (): void => {
  isPopupOpen.value = false;
};

const avto = ref<VNodeRef>("");
const silent = ref<VNodeRef>("");
const energoef = ref<VNodeRef>("");
const options = ref<VNodeRef>("");
const threeD = ref<VNodeRef>("");
const compact = ref<VNodeRef>("");
const dry = ref<VNodeRef>("");
const night = ref<VNodeRef>("");
const platinumIntro = ref<VNodeRef>("");
const smartIntro = ref<VNodeRef>("");

const platinum = "platinum";
const smart = "smart";
const maximum = "maximum";
const silentString = "silent";
const energoString = "energo";
const optionsString = "four";
const threeDString = "3D";
const compactString = "compact";
const dryString = "dry";
const nightString = "night";

useIntersectionObserver(platinumIntro, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    isVisiblePlatinum.value = true;
    isVisibleBadgePlatinum.value =true;
  } else {
    isVisibleBadgePlatinum.value =  false;
    isVisiblePlatinum.value = false;
}
});

useIntersectionObserver(smartIntro, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    isVisibleSmart.value = true;
    isVisibleBadgeSmart.value  = true;
  } else {
    isVisibleSmart.value = false;
    isVisibleBadgeSmart.value =  false;
}
});

useIntersectionObserver(avto, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    props.activeBlockByScroll(platinum, maximum);
    props.hiddenBlock(silentString);
  } else {
    props.hiddenBlock(maximum);
  }
});
useIntersectionObserver(silent, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    props.activeBlockByScroll(platinum, silentString);
    props.hiddenBlock(maximum);
    props.hiddenBlock(energoString);
  } else {
    props.hiddenBlock(silentString);
  }
});
useIntersectionObserver(energoef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    props.activeBlockByScroll(platinum, energoString);
    props.hiddenBlock(silentString);
  } else {
    props.hiddenBlock(energoString);
  }
});
useIntersectionObserver(options, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    props.activeBlockByScroll(platinum, optionsString);
    props.hiddenBlock(energoString);
  } else {
    props.hiddenBlock(optionsString);
  }
});
useIntersectionObserver(threeD, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    props.activeBlockByScroll(smart, threeDString);
    props.hiddenBlock(compactString);
  } else {
    props.hiddenBlock(threeDString);
  }
});
useIntersectionObserver(compact, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    props.activeBlockByScroll(smart, compactString);
    props.hiddenBlock(threeDString);
    props.hiddenBlock(dryString);
  } else {
    props.hiddenBlock(compactString);
  }
});
useIntersectionObserver(dry, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    props.activeBlockByScroll(smart, dryString);
    props.hiddenBlock(compactString);
    props.hiddenBlock(nightString);
  } else {
    props.hiddenBlock(dryString);
  }
});
useIntersectionObserver(night, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    props.activeBlockByScroll(smart, nightString);
    props.hiddenBlock(dryString);
  } else {
    props.hiddenBlock(nightString);
  }
});
</script>

<template>  
  <Intro
    ref="platinumIntro"
    id="platinum"
    name="Platinum"
    backgroungPicture="/bg-intro-1.webp"
    series="Серия Paltinum"
    srcDevice="_nuxt/assets/images/device-intro-1.png"
    :isVisible="isVisiblePlatinum"
  >
    <template v-slot:title>
      <span 
        class="titleText"
        :class="isVisiblePlatinum ? 'fadeUp delay0' : ''"
        >Надежная работа</span
      >
      <span
        class="titleText"
        :class="isVisiblePlatinum ? 'fadeUp delay1' : ''"
        >на охлаждение</span
      >
      <span
        class="titleText"
        :class="isVisiblePlatinum ? 'fadeUp delay2' : ''"
        >и обогрев</span
      >
    </template>
    <template v-slot:badges>
      <IconBadge
        v-for="(item, index) in badgesPlatinum"
        :title="item.title"
        :description="item.description"
        :union="item.union"
        :key="index"
        :class="isVisibleBadgePlatinum ? `fadeUp delay${index}` : ''"

      />
      <NuxtPicture
        class="seriesPicture"
        :class="isVisiblePlatinum ? 'fadeUp delay6' : ''"
        src="/icon-intro-6.png"
        :imgAttrs="{
          alt: 'Иконка для серии',
          class: 'series',
          loading: 'lazy',
        }"
      />
    </template>
  </Intro>
  <SectionMaximum ref="avto" />
  <SectionSilent ref="silent" />
  <SectionEnergo ref="energoef" />
  <SectionEffective />
  <SectionFour ref="options" />
  <section v-if="platinumSeries.length > 0" class="compare">
    <SectionTitle class="title-item compare__title">
      <span @click="$emit('clickButton')">ТАБЛИЦА СРАВНЕНИЯ МОДЕЛЕЙ</span>
    </SectionTitle>
    <div class="compare__table">
      <div class="compare__column">
        <CompareCard
          v-for="card in leftDevicePlatinum"
          :key="card.model"
          :card="card"
          :active="card.model === 'BPHS-09H'"
        >
          <CompareButtonBuy
            text="Купить на shop.ballu.ru"
            isForOfficalSite
            href="#"
          />
          <CompareButtonBuy
            text="Купить у партнеров"
            @click="$emit('clickButton', first)"
            href="#countries"
          />
        </CompareCard>
      </div>
      <div class="compare__column">
        <CompareCard
          v-for="card in rightDevicePlatinum"
          :key="card.model"
          :card="card"
        >
          <CompareButtonBuy
            text="Купить на shop.ballu.ru"
            isForOfficalSite
            href="#"
          />
          <CompareButtonBuy
            text="Купить у партнеров"
            @click="$emit('clickButton', first)"
            href="#countries"
          />
        </CompareCard>
      </div>
    </div>
  </section>
  <section id="countries">
    <ParthenerList
      :class="{ hidden: !props.parthnersBlockActive[first] }"
      @clickCity="selectCity"
    />
  </section>
  <Intro
    id="smart"
    ref="smartIntro"
    name="Smart"
    backgroungPicture="/bg-intro-2.webp"
    series="Серия Smart"
    srcDevice="_nuxt/assets/images/device-intro-2.png"
    :isVisible="isVisibleSmart"
  >
    <template v-slot:title>
      <span 
        class="titleText"
        :class="isVisibleSmart ? 'fadeUp delay0' : ''"
        >Расширяя границы</span
      >
      <span 
        class="titleText"
        :class="isVisibleSmart ? 'fadeUp delay1' : ''"
        >мобильные</span
      >
      <span 
        class="titleText"
        :class="isVisibleSmart ? 'fadeUp delay2' : ''"
        >кондиционеры</span
      >
      <span 
        class="titleText"
        :class="isVisibleSmart ? 'fadeUp delay2' : ''"
        >для дома и бизнеса</span
      >
    </template>
    <template v-slot:badges>
      <IconBadge
        v-for="(item, index) in badgesSmart"
        :title="item.title"
        :description="item.description"
        :union="item.union"
        :key="index"
        :class="isVisibleBadgeSmart ? `fadeUp delay${index}` : ''"
      />
    </template>
    >
  </Intro>
  <SectionThreeD ref="threeD" />
  <SectionCompact ref="compact" />
  <SectionDry ref="dry" />
  <SectionNight ref="night" />
  <section
    v-if="smartElectronic.length > 0"
    class="compare"
  >
    <SectionTitle class="title-item compare__title">
      <span>Таблица СРАВНЕНИЯ МОДЕЛЕЙ</span>
    </SectionTitle>
    <div class="compare__table">
      <div class="compare__column compare__smart">
        <CompareCard
          v-for="card in smartElectronic"
          :key="card.model"
          :card="card"
          :active="card.model === 'BPAC-07 CE_1'"
          class="compare_smart-el-card"
        >
          <CompareButtonBuy
            text="Купить на shop.ballu.ru"
            isForOfficalSite
            href="#"
          />
          <CompareButtonBuy
            text="Купить у партнеров"
            @click="$emit('clickButton', second)"
            href="#countries_smart"
          />
        </CompareCard>
      </div>
    </div>
  </section>
  <section id="countries_smart">
     <ParthenerList
      :class="{ hidden: !props.parthnersBlockActive[second] }"
      @clickCity="selectCity"
    />
  </section>
  <section
    v-if="smartMechanic.length > 0"
    class="compare"
  >
    <div class="compare__table">
      <div class="compare__column compare__mechanic">
        <CompareCard
          v-for="card in smartMechanic"
          :key="card.model"
          :card="card"
        >
          <CompareButtonBuy
            text="Купить на shop.ballu.ru"
            isForOfficalSite
            href="#"
          />
          <CompareButtonBuy
            text="Купить у партнеров"
            @click="$emit('clickButton', third)"
            href="#countries_smart-mechanic"
          />
        </CompareCard>
      </div>
    </div>
  </section>
  <section id="countries_smart-mechanic">
     <ParthenerList
      :class="{ hidden: !props.parthnersBlockActive[third] }"
      @clickCity="selectCity"
    />
  </section>
  <section
    v-if="smartPro.length > 0"
    class="compare"
  >
    <div class="compare__table">
      <div class="compare__column compare__pro">
        <CompareCard v-for="card in smartPro" :key="card.model" :card="card">
          <CompareButtonBuy
            text="Купить на shop.ballu.ru"
            isForOfficalSite
            href="#"
          />
          <CompareButtonBuy
            text="Купить у партнеров"
            @click="$emit('clickButton', forth)"
            href="#countries_smart-pro"
          />
        </CompareCard>
      </div>
    </div>
  </section>
  <section id="countries_smart-pro">
      <ParthenerList
        :class="{ hidden: !props.parthnersBlockActive[forth] }"
        @clickCity="selectCity"
      />
    </section>
  <SectionOthers />
  <FooterBlock />
   <ParthenerPopup
    :class="{ hidden: !isPopupOpen }"
    :selectedCity="currentCity"
    @close="closePopup"
  />
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.titleText {
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 48px;
}

.series {
  height: 60px;
}

.compare {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.compare__title {
  width: 100%;
  margin-top: 30px;
  text-align: center;
}

.compare__table {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
}

.compare__column {
  display: flex;
}

.compare__column:first-child {
  margin-right: 25px;
}

.compare__column:last-child {
  margin-left: 25px;
}

.compare__mechanic {
  margin-top: 0;
}

.hidden {
  display: none;
}

.seriesPicture {
  height: 100%;
  margin-left: 10px;
  display: flex;
  overflow: hidden;
}

@media screen and (max-width: 1280px) {
  .titleText {
    font-size: 30px;
  }
}

@media screen and (max-width: 1024px) {
  .titleText {
    font-size: 22px;
  }

  .series {
    height: 40px;
  }

  .compare__table {
    margin-top: 30px;
    margin-bottom: 70px;
  }

  .compare__column:first-child {
    margin-right: 15px;
  }

  .compare__column:last-child {
    margin-left: 15px;
  }

  .compare__pro {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 768px) {
  .titleText {
    font-size: 16px;
  }

  .series {
    height: 30px;
  }

  .compare__table {
    flex-direction: column;
    align-items: center;
  }

  .compare__column:first-child {
    margin-right: 0;
  }

  .compare__column:last-child {
    margin-left: 0;
  }
  .compare__smart {
    flex-direction: column;
    margin: 0 auto;
  }

  .parthners {
    margin-left: 8.85%;
  }
}

@media screen and (max-width: 425px) {
  .titleText {
    font-size: 14px;
  }

  .series {
    height: 25px;
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

  .compare__column {
    display: grid;
    grid-template-columns: 1fr;
  }

  .compare__mechanic {
    display: flex;
    flex-direction: column;
  }

  .compare__pro {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 375px) {
  .series {
    display: none;
  }
}
</style>
