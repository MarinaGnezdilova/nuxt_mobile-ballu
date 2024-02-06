<script setup lang="ts">
interface IntroBlock {
  name: string;
  backgroungPicture: string;
  series: string;
  srcDevice: string;
  isVisible: boolean;
}

const props = withDefaults(defineProps<IntroBlock>(), {});
</script>

<template>
  <section class="about" :id="name">
    <NuxtPicture
      class="about__picture"
      :src="backgroungPicture"
      :imgAttrs="{
        alt: series,
        class: 'about__image',
        loading: 'lazy',
      }"
    />
    <div class="about__block">
      <div class="about__content">
        <IconLogo type="white" />
        <div class="about__title">
          <slot name="title" />
        </div>
      </div>
      <div class="about__content">
        <span class="about__subtitle" :class="isVisible ? 'fadeUp delay0' : ''"
          >Мобильный кондиционер</span
        >
        <div class="about__subtitleBlock">
          <p
            class="about__subtitleText"
            :class="isVisible ? 'fadeUp delay1' : ''"
          >
            серия
          </p>
          <p
            class="about__subtitleSeries"
            :class="isVisible ? 'fadeUp delay1' : ''"
          >
            {{ name }}
          </p>
        </div>
        <ul class="about__badges">
          <slot name="badges" />
        </ul>
      </div>
    </div>
    <picture class="about__device">
      <img
        :alt="name"
        class="about__imageDevice"
        :class="isVisible ? 'fadeUp delay0' : ''"
        :src="srcDevice"
      />
    </picture>
  </section>
</template>

<style>
.about {
  position: relative;
  width: 100%;
}

.about__picture {
  overflow: hidden;
  display: flex;
}

.about__image {
  width: 100%;
  margin-bottom: calc(var(--index) * 5.3);
}

.about__block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 8%;
  left: 8.85%;
  width: 50%;
  height: 80%;
}

.about__title {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.about__subtitle {
  text-transform: uppercase;
  font-size: 28px;
  line-height: 1;
}

.about__subtitleBlock {
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
}

.about__subtitleText {
  display: flex;
  align-items: flex-start;
  font-size: 46px;
  text-transform: lowercase;
  margin-right: 10px;
}

.about__subtitleSeries {
  font-size: 46px;
  text-transform: uppercase;
}

.about__badges {
  display: flex;
  align-items: flex-end;
  width: 150%;
}

.about__device {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.about__imageDevice {
  position: absolute;
  top: 14%;
  right: 0;
  width: 40%;
  max-width: 759px;
}

@media screen and (max-width: 1440px) {
  .about__block {
    height: 80%;
  }
}

@media screen and (max-width: 1280px) {
  .about__block {
    height: 83%;
  }

  .about__subtitleBlock {
    margin-bottom: 5px;
  }
}

@media screen and (max-width: 1024px) {
  .about__block {
    height: 84%;
  }

  .about__subtitle {
    font-size: 18px;
  }

  .about__subtitleText {
    font-size: 26px;
  }

  .about__subtitleSeries {
    font-size: 28px;
  }

  .about__badges {
    width: 180%;
  }
}

@media screen and (max-width: 768px) {
  .about__block {
    height: 93%;
  }

  .about__subtitle {
    font-size: 16px;
  }

  .about__subtitleText {
    font-size: 22px;
  }

  .about__subtitleSeries {
    font-size: 22px;
  }

  .about__badges {
    margin-bottom: 20px;
    width: 160%;
  }
}

@media screen and (max-width: 425px) {
  .about__block {
    height: 89%;
    top: 15%;
    left: 2%;
  }

  .about__title {
    margin-top: 5px;
  }

  .about__subtitle {
    font-size: 12px;
  }

  .about__subtitleText {
    font-size: 20px;
  }

  .about__subtitleSeries {
    font-size: 22px;
  }
}

@media screen and (max-width: 375px) {
  .about__subtitle {
    font-size: 9px;
  }

  .about__subtitleText {
    font-size: 18px;
  }

  .about__subtitleSeries {
    font-size: 20px;
  }
}
</style>
