<!-- SiteHeader.vue -->
<script setup lang="ts"></script>

<template>
  <header class="siteHeader">
    <h1 class="siteTitle">Lucky Tea &amp; Coffee</h1>
  </header>
</template>

<style scoped>
.siteHeader {
  width: 100%;
  padding: clamp(0.75rem, 3vw, 1rem) 1.25rem;
  padding-top: calc(1rem + env(safe-area-inset-top));
  background: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.06);
  position: relative;
  z-index: 10;
}

.siteTitle {
  margin: 0;
  font-weight: 700;
  font-size: clamp(1.05rem, 5vw, 1.35rem);
  letter-spacing: -0.01em;
  color: black;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .siteHeader {
    padding: 1.25rem 2rem;
  }

  .siteTitle {
    font-size: 1.6rem;
  }
}
</style>