<script setup lang="ts">
import { menuPlatinum } from '../../storage/menu/menuPlatinum';
import { menuSmart } from '../../storage/menu/menuSmart';

const props = defineProps({
    isVisibleForMenu: Object,
});
const emit = defineEmits(['clickMainMenuItem']);
const platinum = 'platinum';
const smart =  'smart';
</script>

<template>
  <ul class="header__models">
    <LayoutMenuItem 
      text="Platuim" 
      :isActive="isVisibleForMenu?.mainBlockName === 'platinum'" 
      href="platinum" 
      @click="$emit('clickMainMenuItem', platinum)"/>
    <LayoutMenuItem 
      text="Smart" 
      :isActive="isVisibleForMenu?.mainBlockName === 'smart'" 
      href="smart" 
      @click="$emit('clickMainMenuItem', smart)"/>
  </ul>
    <ul v-if="isVisibleForMenu?.mainBlockName === 'smart'" class="header__block_active ">
        <LayoutMenuItem
            v-for="(item, index) in menuSmart"
            :key=index
            :text="item.text"
            :href="item.href"
            :isActive="isVisibleForMenu[item.valueForMatchingWithProps] === item.name"
        />
     </ul>
  <ul v-if="isVisibleForMenu?.mainBlockName === 'platinum'" class="header__block_active">
    <LayoutMenuItem 
        v-for="(item, index) in menuPlatinum"
        :key="index"
        :text="item.text"
        :href="item.href"
        :isActive="isVisibleForMenu[item.valueForMatchingWithProps] === item.name"
     />
  </ul>
</template>

<style>
.header__models {
  position: relative;
  display: flex;
  background-image: url('../../assets/images/nav-arrow.png');
  background-position: right center;
  background-repeat: no-repeat;
}
.header__models:before {
  content: '';
  height: 30px;
  width: 1px;
  transform: translateY(25%);
  background: var(--color-green);
}
@media screen and (max-width: 1280px) {
    .header__models {
    background-size: 8px 20px;
  }
}
@media screen and (max-width: 950px) {
    .header__models:before {
    height: 25px;
  }
}
@media screen and (max-width: 750px) {
    .header__models {
    background-size: 5px 12px;
  }
  .header__models:before {
    transform: translateY(0%);
    height: 18px;
  }
}
@media screen and (max-width: 500px) {
    .header__models {
    background-size: 4px 8px;
  }
  .header__models:before {
    display: none;
  }    
}
@media screen and (max-width: 380px) {
  .header__models {
    background-image: none;
    border-right: solid 1px var(--color-green);
  }
}
</style>

