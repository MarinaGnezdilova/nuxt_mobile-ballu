<script setup lang="ts">
interface Badge {
  title: string;
  description: string;
  union?: string;
}
const props = withDefaults(defineProps<Badge>(), {});
</script>

<template>
  <div class="badge">
    <slot name="default" />
    <div class="badge__block">
      <p class="badge__title">{{ title }}</p>
      <p v-if="union" class="badge__union">{{ union }}</p>
    </div>
    <span class="badge__description">{{ description }}</span>
  </div>
</template>

<style>
.badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-blue);
  width: 135px;
  height: 145px;
  border-top-right-radius: 20%;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  margin-left: 10px;
}

.badge__block {
  display: flex;
  align-items: baseline;
}

.badge__title {
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: 55px;
}

.badge__union {
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}

.badge__description {
  margin: 0;
  padding: 0;
  width: 95%;
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  word-break: break-word;
}

@media screen and (max-width: 1440px) {
  .badge {
    width: 95px;
    height: 100px;
  }

  .badge__title {
    font-size: 32px;
  }

  .badge__description {
    font-size: 10px;
  }
  .badge__union {
    font-size: 10px;
  }
}

@media screen and (max-width: 1024px) {
  .badge {
    width: 70px;
    height: 90px;
  }

  .badge__title {
    font-size: 28px;
  }

  .badge__description {
    font-size: 8px;
  }

  .badge__union {
    font-size: 8px;
  }
}

@media screen and (max-width: 768px) {
  .badge {
    width: 52px;
    height: 55px;
    border: 2px solid var(--color-blue);
  }

  .badge__title {
    font-size: 16px;
  }

  .badge__description {
    font-size: 5px;
  }

  .badge__union {
    font-size: 5px;
  }
}

@media screen and (max-width: 425px) {
  .badge {
    margin-left: 3px;
    width: 48px;
    height: 50px;
    border: 1px solid var(--color-blue);
  }
}

@media screen and (max-width: 375px) {
  .badge {
    width: 40px;
    height: 48px;
  }

  .badge__title {
    font-size: 14px;
  }

  .badge__description {
    font-size: 5px;
  }

  .badge__union {
    font-size: 5px;
  }
}
</style>
