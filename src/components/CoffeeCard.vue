<script setup lang="ts">
interface CoffeeItem {
  name: string
  price: number
  imageUrl: string
  imageAlt?: string
}

defineProps<{ item: CoffeeItem }>()
</script>

<template>
  <article class="coffeeCard">
    <div class="coffeeImageWrap">
      <img
        :src="item.imageUrl"
        :alt="item.imageAlt || item.name"
        class="coffeeImage"
        loading="lazy"
      />
    </div>
    <div class="coffeeInfo">
      <h3 class="coffeeName">{{ item.name }}</h3>
      <p class="coffeePrice">${{ item.price.toFixed(2) }}</p>
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
}

.coffeeImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.coffeeCard:hover .coffeeImage {
  transform: scale(1.04);
}

.coffeeInfo {
  padding: 0.9rem 1rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.coffeeName {
  margin: 0;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.25;
  color: black;
}

.coffeePrice {
  margin: 0;
  font-weight: 500;
  font-size: 0.95rem;
  color: black;
}
</style>