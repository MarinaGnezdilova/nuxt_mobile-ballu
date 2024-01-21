<script setup lang="ts">
interface Badge {
  title: string
  description: string
  union?: string
}
const props = withDefaults(defineProps<Badge>(), {});
</script>

<template>
  <div class="badge">
    <slot name="default" />
    <div class="badge__block">
      <p class="badge__title"> {{ title }}</p>
      <p v-if="union" class="badge__union"> {{ union }}</p>
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
  font-size: 3.5em;
}

.badge__union {
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  text-align: center;
  font-size: .8em;
  font-weight: 600;
}

.badge__description {
  margin: 0;
  padding: 0;
  width: 95%;
  text-transform: uppercase;
  text-align: center;
  font-size: .8em;
  font-weight: 600;
  word-break: break-word;
}

@media screen and (max-width: 1400px) {
  .badge {
    width: 80px;
    height: 100px;
  }

  .badge__title {
    font-size: 2.1em;
  }

  .badge__description {
    font-size: 0.6em;
  }
  .badge__union {
    font-size: 0.6em;
  }
}

@media screen and (max-width: 950px) {
  .badge {
    width: 70px;
    height: 90px;
  }

  .badge__title {
    font-size: 1.8em;
  }

  .badge__description {
    font-size: 0.6em;
  }

  .badge__union {
    font-size: 0.6em;
  }
}

@media screen and (max-width: 750px) {
  .badge {
    width: 55px;
    height: 60px;
    border: 2px solid var(--color-blue);
  }

  .badge__title {
    font-size: 1.2em;
  }

  .badge__description {
    font-size: 0.4em;
  }

  .badge__union {
    font-size: 0.4em;
  }
}

@media screen and (max-width: 500px) {
  .badge {
    margin-left: 3px;
    width: 48px;
    height: 55px;
    border: 1px solid var(--color-blue);
  }
}

@media screen and (max-width: 380px) {
  .badge {
    width: 40px;
    height: 48px;
  }

  .badge__title {
    font-size: .8em;
  }

  .badge__description {
    font-size: 0.3em;
  }

  .badge__union {
    font-size: 0.38em;
  }
}</style>