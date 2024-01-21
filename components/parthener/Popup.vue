<script setup lang="ts">
import { parthnersBalakovo } from '../../storage/parthener/contact';
interface City {
    selectedCity: string
};
const props = withDefaults(defineProps<City>(), {
});
const emit = defineEmits(['close']);
</script>

<template>
    <div class="popup" @click.self="$emit('close')">
        <div class="popup__container">
            <div class="popup__city">{{ selectedCity }}</div>
            <button class="popup__button-close" @click="$emit('close')"></button>
            <ul class="popup__list">
                <li v-for="(item, index) in parthnersBalakovo" :key="index" class="popup__item">
                    <p class="popup__parthner">{{ item.name }}</p>
                    <p v-if="item.site" class="popup__site">{{ item.site }}</p>
                    <p v-if="item.address" class="popup__about">Адрес:{{ item.address }}</p>
                    <p v-if="item.contacts" class="popup__about">Тел.: {{ item.contacts }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(103, 105, 109, .7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 6;
}

.popup_hidden {
    display: none;
}

.popup__container {
    width: 30%;
    background-color: #fff;
    position: relative;
    z-index: 5;
}

.popup__city {
    font-size: 2em;
    font-weight: lighter;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
    text-transform: capitalize;
}

.popup__button-close {
    width: 32px;
    height: 32px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 5px;
    background-color: transparent;
    border: none;
}

.popup__button-close::before {
    content: "";
    width: 1px;
    height: 32px;
    position: absolute;
    top: 0;
    left: 14px;
    background-color: var(--color-green);
    transform: rotate(45deg);
}

.popup__button-close::after {
    content: "";
    width: 1px;
    height: 32px;
    position: absolute;
    top: 0;
    left: 14px;
    background-color: var(--color-green);
    transform: rotate(-45deg);
}

.popup__list {
    list-style: none;
    padding-left: 20px;
    padding-bottom: 40px;
}

.popup__item {
    margin-bottom: 15px;
}

.popup__parthner {
    font-size: 1.5em;
    color: var(--color-green);
}

.popup__site {
    font-size: 1.2em;
    color: var(--color-blue);
}

.popup__about {
    font-size: 1em;
    display: block;
    margin-bottom: 5px;
}

@media screen and (max-width: 1280px) {
    .popup__city {
        font-size: 1.8em;
    }

    .popup__parthner {
        font-size: 1.3em;
    }

    .popup__site {
        font-size: 1em;
    }

    .popup__about-pathner {
        font-size: .8em;
    }

    .popup__button-close::before {
        height: 24px;
    }

    .popup__button-close::after {
        height: 24px;
    }
}

@media screen and (max-width: 950px) {
    .popup__city {
        font-size: 1.6em;
    }

    .popup__parthner {
        font-size: 1.1em;
    }

    .partheners-popup__site {
        font-size: .8em;
    }

    .popup__about {
        font-size: .7em;
    }

    .popup__container {
        width: 40%;
    }

    .popup__button-close::before {
        height: 20px;
        top: -5px;
        left: 20px;
    }

    .popup__button-close::after {
        height: 20px;
        top: -5px;
        left: 20px;
    }

    .popup__list {
        padding-bottom: 25px;
    }
}

@media screen and (max-width: 500px) {
    .popup__container {
        width: 63%;
    }

    .popup__city {
        font-size: 1.2em;
    }

    .popup__parthner {
        font-size: .8em;
    }

    .popup__site {
        font-size: .6em;
    }

    .popup__about {
        font-size: .6em;
    }
}</style>