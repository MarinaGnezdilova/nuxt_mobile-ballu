
import type { NuxtLink } from '#build/components';
<script setup lang="ts">
    interface MenuItem {
        text: string
        href: string
        isActive: boolean
        delay?: number
    }
    const props = withDefaults(defineProps<MenuItem>(), {
        delay: 0,
    })
</script>

<template>
    <li class="nav__item" :class="{ 'nav__item_active': isActive }">
        <NuxtLink data-aos="fade-left" data-aos-duration="1500" :data-aos-delay="`${delay}`" class="nav__link" :to="`#${href}`">
            {{ text }}
            <slot name="default" />
        </NuxtLink>
    </li>
</template>
<style>
.nav__item {
    display: flex;
    cursor: pointer;
    align-items: center;
    position: relative;
}

.nav__item:after {
    content: '';
    height: 3px;
    width: 0;
    background: var(--color-green);
    display: block;
    margin: 0 auto;
    margin-top: 46px;
    position: absolute;
    left: 0;
    right: 0;
    transition: all 0.7s ease-in-out;
}

.nav__item_active:after {
    width: 70%;
}

.nav__link {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5em;
    white-space: nowrap;
    vertical-align: middle;
    position: relative;
    padding-right: 23px;
    padding-left: 20px;
}

.nav__link:after {
    content: '';
    height: 3px;
    width: 0;
    background: var(--color-green);
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    position: absolute;
    left: 0;
    right: 0;
    transition: all 0.7s ease-in-out;
}

.nav__link:hover:after {
    width: 70%;
}

@media screen and (max-width: 1650px) {
    .nav__link {
        font-size: 1.3em;
    }
}

@media screen and (max-width: 1280px) {
    .nav__item_active::after {
        margin-top: 43px;
    }

    .nav__link {
        font-size: 1.1em;
        padding-left: 10px;
        padding-right: 12px;
    }
}

@media screen and (max-width: 950px) {
    .nav__item_active:after {
        margin-top: 38px;
    }

    .nav__link {
        font-size: 0.8em;
    }

    .nav__link:after {
        height: 3px;
    }
}

@media screen and (max-width: 750px) {
    .nav__item_active:after {
        margin-top: 33px;
    }

    .nav__link {
        font-size: 0.5em;
        padding-left: 5px;
        padding-right: 8px;
    }
}

@media screen and (max-width: 500px) {
    .nav__link {
        font-size: 0.4em;
        padding-left: 3px;
        padding-right: 6px;
    }

    .nav__link:after {
        height: 2px;
        margin-top: 10px;
    }
}

@media screen and (max-width: 380px) {
    .nav__link {
        font-size: 0.4em;
        padding-left: 2px;
        padding-right: 2px;
    }

    .nav__link:after {
        height: 2px;
        margin-top: 10px;
    }
}
</style>