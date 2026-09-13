<script setup lang="ts">
import CoffeeCard from '@/components/CoffeeCard.vue';
import ImageCarousel from '@/components/ImageCarousel.vue';
import image1 from '@/assets/images/carousel/1.png'
import image2 from '@/assets/images/carousel/2.png'
import image3 from '@/assets/images/carousel/3.png'
import image4 from '@/assets/images/menu/Black White and Orange Illustrated Good Morning Facebook Post(24).png'


const heroImages = [
    { src: image1, alt: 'welcome' },
    { src: image2, alt: 'latte_group' },
    { src: image3, alt: 'latte' }
]

const coffeeItems = [
  {
    name: "កាហ្វេឡាតេទឹកកក",
    price: 2,
    imageUrl: image4,
    imageAlt: 'cafe'
  },
] 
</script>

<template>
    <main class="mainPage">
        <ImageCarousel :images="heroImages"></ImageCarousel>
        <h2 style="margin: 0; font-family: 'Noto Sans Khmer', sans-serif;">ម៉ឺនុយរបស់យើង</h2>
        <section class="coffeeGrid">
          <CoffeeCard
            v-for="item in coffeeItems"
            :key="item.name"
            :item="item"
          />
        </section>
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

.menuTitle {
  margin: 0;
}

.pageHeader h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #2b2b3a;
}

.coffeeGrid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

@media (min-width: 768px) {
  .mainPage {
    padding: 2rem;
  }

  .coffeeGrid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
}

@media (min-width: 1024px) {
  .coffeeGrid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .mainPage {
    padding: 2rem;
  }
}
</style>