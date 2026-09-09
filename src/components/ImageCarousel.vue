<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

export interface CarouselImage {
  src: string
  alt: string
}

const props = defineProps<{
  images: CarouselImage[]
  intervalMs?: number
}>()

if (import.meta.env.DEV && props.images.length !== 3) {
  console.warn(`ImageCarousel expects exactly 3 images, got ${props.images.length}`)
}
const activeIndex = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

function advance() {
  activeIndex.value = (activeIndex.value + 1) % 3
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return 

  timer = setInterval(advance, props.intervalMs ?? 3000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="carousel">
    <div
      class="carouselTrack"
      :style="{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }"
    >
      <div v-for="(img, i) in images" :key="i" class="carouselSlide">
        <img :src="img.src" :alt="img.alt" class="carouselImage" loading="lazy" />
      </div>
    </div>

    <div class="carouselDots" aria-hidden="true">
      <span
        v-for="(_, i) in images"
        :key="i"
        class="carouselDot"
        :class="{ isActive: i === activeIndex }"
      />
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow:
    0 4px 10px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.06);
}

.carouselTrack {
  display: flex;
  width: 300%; 
  transition: transform 0.6s ease;
  touch-action: none;   
  pointer-events: none; 
}

.carouselSlide {
  width: 33.3333%;
  flex-shrink: 0;
  aspect-ratio: 16 / 9;
}

.carouselImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carouselDots {
  position: absolute;
  bottom: 0.6rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
}

.carouselDot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transition: background 0.3s ease, transform 0.3s ease;
}

.carouselDot.isActive {
  background: white;
  transform: scale(1.3);
}

@media (min-width: 768px) {
  .carousel {
    margin: 1.5rem 0;
  }
}
</style>