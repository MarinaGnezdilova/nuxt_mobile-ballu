<script setup lang="ts">
interface BlockActive {
  first: boolean;
  second: boolean;
  third: boolean;
  forth: boolean;
}

enum MainMenuItem {
  platinum = "platinum",
  smart = "smart",
}

enum MenuItem {
  maximumItem = "maximum",
  silentItem = "silent",
  energoItem = "energo",
  threeDItem = "threeD",
  compactItem = "compact",
  dryItem = "dry",
  nightItem = "night",
  fourItem = "four",
}

enum ParthenerBlock {
  first = "first",
  second = "second",
  third = "third",
  forth = "forth",
}

const parthnersBlockActive = ref<BlockActive>({
  first: false,
  second: false,
  third: false,
  forth: false,
});

const handlePathenerBlock = (value: ParthenerBlock): void => {
  if( parthnersBlockActive.value[value] === false) {
    parthnersBlockActive.value.first = false;
    parthnersBlockActive.value.second = false;
    parthnersBlockActive.value.third = false;
    parthnersBlockActive.value.forth = false;
    parthnersBlockActive.value[value] = !parthnersBlockActive.value[value];
  } else {
    parthnersBlockActive.value.first = false;
    parthnersBlockActive.value.second = false;
    parthnersBlockActive.value.third = false;
    parthnersBlockActive.value.forth = false;
  }
};

interface Sections {
  maximum: string;
  silent: string;
  energo: string;
  four: string;
  threeD: string;
  compact: string;
  dry: string;
  night: string;
  mainBlockName: string;
}
const sections = ref<Sections>({
  maximum: "",
  silent: "",
  energo: "",
  four: "",
  threeD: "",
  compact: "",
  dry: "",
  night: "",
  mainBlockName: "platinum",
});

const activeBlockByScroll = (main: MainMenuItem, section: MenuItem): void => {
  sections.value.mainBlockName = main;
  sections.value.silent = "";
  sections.value.energo = "";
  sections.value.four = "";
  sections.value.threeD = "";
  sections.value.compact = "";
  sections.value.dry = "";
  sections.value.night = "";
  sections.value[section] = section;
};

const hiddenBlock = (hiddenBlock: MenuItem) => {
  sections.value[hiddenBlock] = "";
};

const clickMainMenuItem = (item: MainMenuItem) => {
  sections.value.compact = "";
  sections.value.dry = "";
  sections.value.energo = "";
  sections.value.night = "";
  sections.value.four = "";
  sections.value.silent = "";
  if (item === "platinum") {
    sections.value.mainBlockName = "platinum";
    sections.value.maximum = "maximum";
  } else if (item === "smart") {
    sections.value.mainBlockName = "smart";
    sections.value.threeD = "threeD";
  }
};
</script>

<template>
  <Head>
    <Title>Platinum</Title>
    <Meta name="description" content="Mobile Ballu" />
  </Head>
  <NuxtLayout
    @click="handlePathenerBlock"
    :isVisibleForMenu="sections"
    :clickMainMenuItem="clickMainMenuItem"
  />
  <NuxtPage
    @clickButton="handlePathenerBlock"
    :parthnersBlockActive="parthnersBlockActive"
    :activeBlockByScroll="activeBlockByScroll"
    :hiddenBlock="hiddenBlock"
  />
</template>

<style>
@import "./assets/main.css";
</style>
