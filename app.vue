<script setup lang="ts">
interface BlockActive {
  first: boolean,
  second: boolean,
  third: boolean,
  forth: boolean
};

const parthnersBlockActive = ref<BlockActive>({
  first: false,
  second: false,
  third: false,
  forth: false
});

const handlePathenerBlock = (value: 'first'| 'second' | 'third' | 'forth'):void => {
  parthnersBlockActive.value[value] = !parthnersBlockActive.value[value];
  if( value === 'first') {
    parthnersBlockActive.value.second = false;
    parthnersBlockActive.value.third = false;
    parthnersBlockActive.value.forth = false;
  } else if(value === 'second') {
    parthnersBlockActive.value.first = false;
    parthnersBlockActive.value.third = false;
    parthnersBlockActive.value.forth = false;
  } else if(value === 'third') {
    parthnersBlockActive.value.second = false;
    parthnersBlockActive.value.first = false;
    parthnersBlockActive.value.forth = false;
  } else if(value === 'forth') {
    parthnersBlockActive.value.second = false;
    parthnersBlockActive.value.third = false;
    parthnersBlockActive.value.first = false;
  }
};

interface Sections {
  avtoIsVisible: string,
  silentIsVisible: string,
  energoefIsVisible: string,
  optionsIsVisible: string,
  threeDIsVisible: string,
  compactIsVisible: string,
  dryIsVisible: string,
  nightIsVisible: string,
  mainBlockName: string
};
const sections = ref<Sections>({
  avtoIsVisible: '',
  silentIsVisible: '',
  energoefIsVisible: '',
  optionsIsVisible: '',
  threeDIsVisible: '',
  compactIsVisible: '',
  dryIsVisible: '',
  nightIsVisible: '',
  mainBlockName: 'platinum'
}
);

const activeBlockByScroll = (main: 'platinum' | 'smart', section: 'maximum'| 'silent' | 'energo' | 'energo' | '3D' | 'compact' | 'dry' | 'night' | 'four'):void => {
 if(main === 'platinum') {
  sections.value.mainBlockName = main;
 } else if(main === 'smart') {
  sections.value.mainBlockName = main;
 };
 if(section === 'maximum') {
  sections.value.avtoIsVisible = section
 } else if(section === 'silent') {
  sections.value.silentIsVisible = section
 } else if(section === 'energo') {
  sections.value.energoefIsVisible = section;
 } else if(section === 'four') {
  sections.value.optionsIsVisible = section;
 } else if (section === '3D') {
  sections.value.threeDIsVisible = section;
 } else if (section === 'compact') {
  sections.value.compactIsVisible = section;
 } else if(section === 'dry') {
  sections.value.dryIsVisible = section;
 } else if(section === 'night') {
  sections.value.nightIsVisible = section;
 }
};

const hiddenBlock = (hiddenBlock: 'maximum'| 'silent' | 'energo' | 'energo' | '3D' | 'compact' | 'dry' | 'night' | 'four') => {
  if(hiddenBlock === 'maximum') {
    sections.value.avtoIsVisible = '';
  } else if(hiddenBlock === 'silent') {
    sections.value.silentIsVisible = '';
  } else if(hiddenBlock === 'energo') {
    sections.value.energoefIsVisible = '';
  } else if(hiddenBlock === 'four') {
    sections.value.optionsIsVisible = '';
  } else if(hiddenBlock === '3D') {
    sections.value.threeDIsVisible = '';
  } else if(hiddenBlock === 'compact') {
    sections.value.compactIsVisible = '';
  } else if(hiddenBlock === 'dry') {
    sections.value.dryIsVisible = ''
  } else if (hiddenBlock === 'night') {
    sections.value.nightIsVisible = '';
  }
};

const clickMainMenuItem = (item: 'platinum' | 'smart') => {
  if(item === 'platinum') {
    sections.value.mainBlockName = 'platinum';
    sections.value.avtoIsVisible = 'maximum';
  } else if (item === 'smart') {
    sections.value.mainBlockName = 'smart';
    sections.value.threeDIsVisible = '3D';
  };
    sections.value.compactIsVisible = '',
    sections.value.dryIsVisible = '';
    sections.value.energoefIsVisible = '';
    sections.value.nightIsVisible = '';
    sections.value.optionsIsVisible = '';
    sections.value.silentIsVisible = '';
};
</script>

<template>
    <Head>
      <Title>Platinum</Title>
      <Meta name="description" content="Mobile Ballu"/>
    </Head>
   <NuxtLayout 
    @click="handlePathenerBlock" 
    :isVisibleForMenu="sections"
    :clickMainMenuItem = 'clickMainMenuItem'
    />
   <NuxtPage 
    @clickButton="handlePathenerBlock" 
    :parthnersBlockActive="parthnersBlockActive" 
    :activeBlockByScroll="activeBlockByScroll"
    :hiddenBlock="hiddenBlock"
    />
</template>

<style>
@import './assets/main.css';
</style>
