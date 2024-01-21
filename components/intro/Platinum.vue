
<script setup>
import { badges } from '../../storage/badges/platinum';
const props = defineProps({

});

</script>

<template>
 
    <section class="about" id="platinum">
        <NuxtPicture class="about__picture" src="/bg-intro-1.webp"
            :imgAttrs="{ alt: 'Серия Paltinum', class: 'about__image about-first__image', loading: 'lazy' }" />
        <div class="about__block">
            <div>
                <IconLogo type="white" />
                <ClientOnly>
                  <div class="about__title">
                    <span class="about__text" data-aos="fade-up" data-aos-duration="1000">Надежная работа</span>
                    <span class="about__text" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">на
                        охлаждение</span>
                    <span class="about__text" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">и
                        обогрев</span>
                </div>
                </ClientOnly>
            </div>
            <div>
                <span class="about__subtitle" data-aos="fade-up" data-aos-duration="1000">Мобильный кондиционер</span>
                <div class="about__subtitle-block">
                    <p class="about__big" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="-200"
                        data-aos-delay="300">
                        серия</p>
                    <p class="about__small" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="-200"
                        data-aos-delay="300">
                        Platinum</p>
                </div>
                <ul class="about__badges">
                    <IconBadge v-for="(item, index) in badges" :title="item.title" :description="item.description"
                        :union="item.union" :key="index" data-aos="zoom-in-up" data-aos-duration="500" :data-aos-delay="(index + 1) * 400"/>
                    <NuxtPicture class="about__series-picture" src="/icon-intro-6.png" data-aos="zoom-in" data-aos-duration="3000"
                        :imgAttrs="{ alt: 'Иконка для серии', class: 'about__series', loading: 'lazy' }" />
                </ul>
            </div>
        </div>
        <picture class="about__device">
          <img alt="Мобильный кондиционер Platinum" data-aos="fade-up" data-aos-duration="2000" class="about__image-device"
          src="../../assets/images/device-intro-1.png" />
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

.about-first__image {
  margin-bottom: calc(var(--index) * 5);
}

.about__block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 8%;
  left: 8.85%;
  width: 50%;
  height: 85%;
}

.about__title {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.about__text {
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 3.2em;
}

.about__subtitle {
  text-transform: uppercase;
  font-size: 28px;
  line-height: 1;
}

.about__subtitle-block {
  display: flex;
  align-items: end;
  margin-bottom: 15px;

}

.about__big {
  display: flex;
  align-items: start;
  font-size: 3em;
  text-transform: lowercase;
  margin-right: 10px;
}

.about__small {
  font-size: 3em;
  text-transform: uppercase;
}

.about__badges {
  display: flex;
  align-items: end;
  width: 150%;
}

.about__series-picture {
  height: 100%;
  margin-left: 10px;
  display: flex;
  overflow: hidden;
}

.about__series {
  height: 60px;
}

.about__device {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.about__image-device {
  position: absolute;
  top: 14%;
  right: 0;
  width: 40%;
  max-width: 759px;
}

@media screen and (max-width: 1280px) {
  .about__text {
    font-size: 1.6em;
  }

  .about__subtitle-block {
    margin-bottom: 5px;
  }
}

@media screen and (max-width: 950px) {
  .about__text {
    font-size: 1.2em;
  }

  .about__subtitle {
    font-size: 1.2em;
  }

  .about__big {
    font-size: 2.3em;
  }

  .about__small {
    font-size: 2.3em;
  }

  .about__badges {
    width: 180%;
  }

  .about__series {
    height: 40px;
  }
}

@media screen and (max-width: 750px) {
  .about__block {
    height: 90%;
  }

  .about__subtitle {
    font-size: 1.2em;
  }

  .about__big {
    font-size: 1.8em;
  }

  .about__small {
    font-size: 1.8em;
  }

  .about__badges {
    margin-bottom: 20px;
  }

  .about__series {
    height: 30px;
  }
}

@media screen and (max-width: 500px) {
  .about__block {
    top: 15%;
    left: 2%;
  }

  .about__title {
    margin-top: 5px;
  }

  .about__text {
    font-size: 0.8em;
  }

  .about__subtitle {
    font-size: 0.8em;
  }

  .about__big {
    font-size: 1.3em;
  }

  .about__small {
    font-size: 1.3em;
  }

  .about__series {
    height: 25px;
  }
}

@media screen and (max-width: 380px) {
  .about__text {
    font-size: 0.6em;
  }

  .about__subtitle {
    font-size: 0.6em;
  }

  .about__big {
    font-size: 1.2em;
  }

  .about__small {
    font-size: 1.2em;
  }

  .about__series {
    display: none;
  }
}

</style>
