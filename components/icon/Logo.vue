
<script setup lang="ts">
interface Logo {
    type: 'black' | 'white',
}
const props = withDefaults(defineProps<Logo>(), {
})
</script>

<template>
    <NuxtPicture 
        v-if="props.type === 'black'"
        class="logo"
        src="/logo-dark.png"
        :imgAttrs="{alt:'Логотип', class:'logo_black', loading:'lazy'}"
    />
    <NuxtPicture 
        v-if="props.type === 'white'"
        class="logo"
        src="/logo-white.png"
        :imgAttrs="{alt:'Логотип', class:'logo_white', loading:'lazy'}"
    />
</template>

<style>
.logo {
    width: 100%;
    display: flex;
    overflow: hidden;
}

.logo_white {
    width: 38%;
    max-width: 284px;
    min-width: 90px;
}

.logo_black {
    width: 114px;
    height: 39px;
    margin-right: 5%;
    padding-top: 3px;
    float: left;
}

@media screen and (max-width: 1280px) {
    .logo_black {
        width: 90px;
        height: 35px;
    }
}

@media screen and (max-width: 950px) {
    .logo_black {
        margin-right: 2%;
    }
}

@media screen and (max-width: 750px) {
    .logo_black {
        width: 65px;
        height: 23px;
    }
}

@media screen and (max-width: 500px) {
    .logo_black {
        width: 50px;
        height: 20px;
    }
}</style>