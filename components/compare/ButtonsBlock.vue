<script setup lang="ts">
interface Href {
  href: string;
}
const props = withDefaults(defineProps<Href>(), {});

const emit = defineEmits(["clickButton"]);
</script>
<template>
  <CompareButtonBuy text="Купить на shop.ballu.ru" isForOfficalSite href="#" />
  <CompareButtonBuy
    text="Купить у партнеров"
    @click="$emit('clickButton')"
    :href="props.href"
  />
</template>
<style></style>
