<script setup lang="ts">

export interface VisibilitySections {
    isVisibleForMenu: {
        avtoIsVisible: string,
        silentIsVisible: string,
        energoefIsVisible: string,
        optionsIsVisible: string,
        threeDIsVisible: string,
        compactIsVisible: string,
        dryIsVisible: string,
        nightIsVisible: string,
        mainBlockName: string,
    },
}

const props = defineProps({
    visibleMenu: Object,
    clickMainMenuItem: Function
});

const first = 'first';
const emit = defineEmits(['clickButton']);
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
        <a href="#countries" class="header__button" @click="$emit('clickButton', first)">Купить</a>
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
    font-size: 1.7em;
    /*margin-left: 50px;*/
    cursor: pointer;
}

.header__block_active {
    overflow-x: visible;
    display: flex;
}

.header_block_hidden {
    display: none;
}

@media screen and (max-width: 1650px) {
    .header__button {
        font-size: 1.5em;
    }

    .header__logo {
        margin-right: 50px;
    }
}

@media screen and (max-width: 1280px) {
    .header__button {
        font-size: 1.1em;
    }

    .header__logo {
        margin-right: 20px;
    }
}

@media screen and (max-width: 950px) {
    .header {
        height: 38px;
    }

    .header__container {
        padding-left: 2%;
    }

    .header__button {
        font-size: 0.8em;
    }
}

@media screen and (max-width: 750px) {
    .header {
        height: 30px;
    }

    .header__container {
        display: flex;
        align-items: center;
    }

    .header__button {
        font-size: 0.6em;
        margin-left: 0;
    }
}

@media screen and (max-width: 500px) {
    .header {
        padding-left: 0;
    }

    .header__button {
        font-size: 0.4em;
    }

    .header__logo {
        margin-right: 0px;
    }
}

@media screen and (max-width: 380px) {
    .header__button {
        font-size: 0.3em;
    }
}
</style>