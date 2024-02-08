<script setup lang="ts">
interface MenuItem {
  text: string;
  href: string;
  isActive: boolean;
  delay?: number;
}
const props = withDefaults(defineProps<MenuItem>(), {
  delay: 0,
});
</script>

<template>
  <li class="nav__item" :class="{ active: isActive }">
    <NuxtLink
      class="nav__link"
      :class="`fadeRight delay${delay}`"
      :to="`#${href}`"
    >
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
  content: "";
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

.nav__item.active:after {
  width: 70%;
}

.nav__link {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  white-space: nowrap;
  vertical-align: middle;
  position: relative;
  padding-right: 23px;
  padding-left: 20px;
}

.nav__link:after {
  content: "";
  height: 3px;
  width: 0;
  background: var(--color-green);
  display: block;
  margin: 0 auto;
  margin-top: 12px;
  position: absolute;
  left: 0;
  right: 0;
  transition: all 0.7s ease-in-out;
}

.nav__link:hover:after {
  width: 70%;
}

@media screen and (max-width: 1440px) {
  .nav__link {
    font-size: 18px;
  }
}

@media screen and (max-width: 1280px) {
  .nav__item.active::after {
    margin-top: 43px;
  }

  .nav__link {
    font-size: 16px;
    padding-left: 10px;
    padding-right: 12px;
  }

  .nav__link:after {
    margin-top: 11px;
  }
}

@media screen and (max-width: 1024px) {
  .nav__item.active:after {
    margin-top: 38px;
  }

  .nav__link {
    font-size: 12px;
  }

  .nav__link:after {
    height: 3px;
  }
}

@media screen and (max-width: 768px) {
  .nav__item.active:after {
    margin-top: 30px;
  }

  .nav__link {
    font-size: 8px;
    padding-left: 5px;
    padding-right: 8px;
  }

  .nav__link:after {
    margin-top: 9px;
  }
}

@media screen and (max-width: 425px) {
  .nav__link {
    font-size: 6px;
    padding-left: 3px;
    padding-right: 6px;
  }

  .nav__link:after {
    height: 2px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 375px) {
  .nav__link {
    padding-left: 2px;
    padding-right: 2px;
  }

  .nav__link:after {
    height: 2px;
    margin-top: 10px;
  }
}
</style>
