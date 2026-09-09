<script setup lang="ts">
import CoffeeCard from '@/components/CoffeeCard.vue';
import ImageCarousel from '@/components/ImageCarousel.vue';
import image1 from '@/assets/images/carousel/1.png'
import image2 from '@/assets/images/carousel/2.png'
import image3 from '@/assets/images/carousel/3.png'

const heroImages = [
    { src: image1, alt: 'welcome' },
    { src: image2, alt: 'latte_group' },
    { src: image3, alt: 'latte' }
]

const coffeeItems = {
  name: "កាហ្វេឡាតេទឹកកក",
  price: 2,
  imageUrl: '../assets/images/carousel/1.png',
  imageAlt: 'cafe'
}
</script>

<template>
    <main class="mainPage">
        <ImageCarousel :images="heroImages"></ImageCarousel>
        <h3 style="margin-top: 0;">Browse The Menu</h3>
        <CoffeeCard :item="coffeeItems"></CoffeeCard>
        <CoffeeCard :item="coffeeItems"></CoffeeCard>
    </main>
</template>

<style scoped>
 .mainPage {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: white;
  padding: 1.25rem;
  background: white;
  background-image: radial-gradient(black 1px, transparent 0);
  background-size: 51px 51px;
  background-position: -19px -19px;
}

.pageHeader h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #2b2b3a;
}

.productGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9.5rem, 1fr));
  gap: 1rem;
}

.productCard {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 12px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  backdrop-filter: blur(4px);
}

.productImage {
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
}

.productName {
  margin: 0;
  font-size: 0.95rem;
  color: #2b2b3a;
}

.productPrice {
  margin: 0;
  font-weight: 600;
  color: #2b2b3a;
}

@media (min-width: 768px) {
  .mainPage {
    padding: 2rem;
  }
}
</style>