<script setup lang="ts">
export interface VisibilitySections {
  isVisibleForMenu: {
    avtoIsVisible: string;
    silentIsVisible: string;
    energoefIsVisible: string;
    optionsIsVisible: string;
    threeDIsVisible: string;
    compactIsVisible: string;
    dryIsVisible: string;
    nightIsVisible: string;
    mainBlockName: string;
  };
}

const props = defineProps({
  visibleMenu: Object,
  clickMainMenuItem: Function,
});

const first = "first";
const emit = defineEmits(["clickButton"]);
const clickMainMenuItem = () => props.clickMainMenuItem();
</script>

<template>
  <header class="header">
    <nav class="header__container">
      <div class="header__logo">
        <IconLogo type="black" />
      </div>
      <LayoutMenu
        @clickMainMenuItem="clickMainMenuItem"
        :isVisibleForMenu="visibleMenu"
      />
    </nav>
    <span>{{ $attrs.test }}</span>
    <a
      href="#countries"
      class="header__button"
      @click="$emit('clickButton', first)"
      >Купить</a
    >
  </header>
  <slot />
</template>

<style>
.header {
  width: 100%;
  opacity: 0.9;
  display: flex;
  height: 47px;
  position: fixed;
  top: 0;
  background-color: #fff;
  opacity: 0.9;
  z-index: 10;
  border-bottom: 1px solid var(--color-grey);
}

.header__logo {
  margin-right: 180px;
}

.header__container {
  display: flex;
  padding-left: 8.85%;
}

.header__button {
  display: flex;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  align-items: center;
  justify-content: center;
  width: 8%;
  background-color: var(--color-green);
  font-size: 28px;
  cursor: pointer;
}

@media screen and (max-width: 1440px) {
  .header__button {
    font-size: 25px;
  }

  .header__logo {
    margin-right: 50px;
  }
}

@media screen and (max-width: 1280px) {
  .header__button {
    font-size: 20px;
  }

  .header__logo {
    margin-right: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .header {
    height: 38px;
  }

  .header__container {
    padding-left: 2%;
  }

  .header__button {
    font-size: 16px;
  }
}

@media screen and (max-width: 768px) {
  .header {
    height: 30px;
  }

  .header__container {
    display: flex;
    align-items: center;
  }

  .header__button {
    font-size: 10px;
    margin-left: 0;
  }
}

@media screen and (max-width: 425px) {
  .header {
    padding-left: 0;
  }

  .header__button {
    font-size: 8px;
  }

  .header__logo {
    margin-right: 0px;
  }
}

@media screen and (max-width: 375px) {
  .header__button {
    font-size: 5px;
  }
}
</style>
