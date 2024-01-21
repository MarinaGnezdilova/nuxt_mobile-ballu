<script setup lang="ts">
import { badges } from '../../storage/badges/smart';
</script>

<template>
    <section class="about" id="smart">
        <NuxtPicture class="about__picture" 
            src="/bg-intro-2.webp"
            :imgAttrs="{ alt: 'серия smart', class: 'about__image', loading: 'lazy' }" />
        <div class="about__block smart__block">
            <div>
                <IconLogo type="white" />
                <div class="about__title smart__title">
                    <span class="about__text" data-aos="fade-up" data-aos-duration="1000">Расширяя границы</span>
                    <span class="about__text" data-aos="fade-up" data-aos-duration="1500">мобильные</span>
                    <span class="about__text" data-aos="fade-up" data-aos-duration="2000">кондиционеры</span>
                    <span class="about__text" data-aos="fade-up" data-aos-duration="2500">для дома и бизнеса</span>
                </div>
            </div>
            <div>
                <p class="about__subtitle" data-aos="fade-up" data-aos-duration="1000">Мобильный кондиционер</p>
                <div class="about__subtitle-block">
                    <p class="about__big" data-aos="fade-up" data-aos-duration="1500">серия</p>
                    <p class="about__small" data-aos="fade-up" data-aos-duration="1500">Smart</p>
                </div>
                <ul class="about__badges smart__badges">
                    <IconBadge v-for="(item, index) in badges" :title="item.title" :description="item.description"
                        :union="item.union" :key="index" data-aos="zoom-in-up" data-aos-duration="500" :data-aos-delay="(index + 1) * 400"/>
                </ul>
            </div>
        </div>
        <picture class="about__device">
          <img alt="Мобильный кондиционер Platinum" data-aos="fade-up" data-aos-duration="2000" class="about__image-device"
          src="../../assets/images/device-intro-2.png" />
        </picture>
      
    </section>
</template>

<style>
.smart__block {
    top: 7%;
}

@media screen and (max-width: 750px) {
    .smart__text {
        height: 80%;
    }

    .smart__title {
        margin-bottom: calc(var(--index) * 4);
    }
}

@media screen and (max-width: 500px) {
    .smart__block {
        top: 3%;
        height: 100%;
    }

    .smart__title {
        margin-bottom: calc(var(--index) * 0.5);
    }
}
</style>