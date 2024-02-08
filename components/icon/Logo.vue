<script setup lang="ts">
interface Logo {
  type: "black" | "white";
};
const props = withDefaults(defineProps<Logo>(), {});
</script>

<template>
  <NuxtPicture
    v-if="props.type === 'black'"
    class="logo"
    src="/logo-dark.png"
    :imgAttrs="{ alt: 'Логотип', class: 'black', loading: 'lazy' }"
  />
  <NuxtPicture
    v-if="props.type === 'white'"
    class="logo"
    src="/logo-white.png"
    :imgAttrs="{ alt: 'Логотип', class: 'white', loading: 'lazy' }"
  />
</template>

<style>
.logo {
  width: 100%;
  display: flex;
  overflow: hidden;
}

.white {
  width: 38%;
  max-width: 284px;
  min-width: 90px;
}

.black {
  width: 114px;
  height: 39px;
  margin-right: 5%;
  padding-top: 3px;
  float: left;
}

@media screen and (max-width: 1280px) {
  .black {
    width: 90px;
    height: 35px;
  }
}

@media screen and (max-width: 1024px) {
  .black {
    margin-right: 2%;
  }
}

@media screen and (max-width: 768px) {
  .black {
    width: 65px;
    height: 23px;
  }
}

@media screen and (max-width: 425px) {
  .black {
    width: 50px;
    height: 20px;
  }
}
</style>
