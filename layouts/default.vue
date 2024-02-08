<script setup lang="ts">
const props = defineProps({
  clickMainMenuItem: Function,
});

const emit = defineEmits(["click"]);
const first = "first";
</script>

<template>
  <LayoutHeadBlock
    @clickButton="$emit('click', first)"
    :visibleMenu="$attrs.isVisibleForMenu"
    :clickMainMenuItem="props.clickMainMenuItem"
  />
</template>
