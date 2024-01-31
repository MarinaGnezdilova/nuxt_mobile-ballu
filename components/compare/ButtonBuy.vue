
<script setup lang="ts">
interface Button {
    text: string,
    isForOfficalSite?: boolean
    href: string
}
const props = withDefaults(defineProps<Button>(), {
    isForOfficalSite: false,
})
</script>

<template>
    <NuxtLink class="button" :class="{ 'offical': isForOfficalSite }" :to="href">
        <slot name="default" />
        {{ text }}
    </NuxtLink>
</template>

<style>
.button {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 55px;
    background-color: #fff;
    border: 1px solid var(--color-grey);
    text-transform: uppercase;
    font-size: 24px;
    font-family: inherit;
    cursor: pointer;
    margin-bottom: 20px;
}

.button:hover {
    background-color: var(--color-green);
    color: #fff;
}

.offical {
    background-color: var(--color-blue);
    color: #fff;
    border: none;
}

@media screen and (max-width: 1280px) {
    .button {
        font-size: 20px;
    }
}

@media screen and (max-width: 1024px) {
    .button {
        font-size: 14px;
    }

@media screen and (max-width: 375px) {
    .button {
        height: 40px;
        margin-bottom: 10px;
    }
    }
}</style>