<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { CoffeeItem } from '@/util/MenuItems';

const { locale } = useI18n()

defineProps<{ item: CoffeeItem }>()
</script>

<template>
  <article class="coffeeCard">
    <div class="coffeeImageWrap">
      <img
        :src="item.imageUrl"
        :alt="item.imageAlt || item.name.km"
        class="coffeeImage"
        loading="lazy"
      />
    </div>

    <div class="coffeeInfo">
      <h3 class="coffeeName">
        {{ locale === 'km' ? item.name.km : item.name.zh }}
      </h3>
      <p class="coffeePrice">{{ item.price }}៛</p>
    </div>
  </article>
</template>

<style scoped>
.coffeeCard {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  border: 1px solid rgba(59, 36, 23, 0.12);
  border-radius: 14px;
  overflow: hidden;
}

.coffeeImageWrap {
  width: 100%;
  aspect-ratio: 4 / 5;
  background: white;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
}

.coffeeImage {
  width: 90%;
  height: 90%;
  object-fit: contain;
  display: block;
  transition: transform 0.4s ease;
}
.coffeeCard:hover .coffeeImage {
  transform: scale(1.04);
}

.coffeeInfo {
  padding: .7rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.coffeeName {
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: black;
  font-family: 'Noto Sans Khmer', serif;
}

.coffeePrice {
  margin: 0;
  font-family: 'Noto Sans Khmer', serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: black;
}
</style>