<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const switchLanguage = () => {
  locale.value = locale.value === 'km' ? 'zh' : 'km'
}
</script>

<template>
  <header class="siteHeader">
    <h1 class="siteTitle">
      Lucky Tea
      <span class="coffeeLine">
        &amp; Coffee
        <Iconify
          class="coffeeIcon"
          icon="boxicons:coffee-beans-filled"
          height="2rem"
          width="2rem"
        />
      </span>
    </h1>

    <button class="languageBtn" @click="switchLanguage">
      {{ locale === 'km' ? 'ខ្មែរ': '中文'  }}
    </button>
  </header>
</template>

<style scoped>
.siteHeader {
  width: 100%;
  box-sizing: border-box;

  padding: clamp(0.75rem, 3vw, 1rem) 1.25rem;
  padding-top: calc(1rem + env(safe-area-inset-top));

  background: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.06);

  position: relative;
  z-index: 10;
}

.languageBtn {
  appearance: none;
  -webkit-appearance: none;

  padding: 0;
  margin: 0;

  font-family: 'Noto Sans Khmer', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  line-height: 1;

  color: black;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.siteTitle {
  font-family: 'Climate Crisis', sans-serif;
  margin: 0;
  font-weight: 700;
  font-size: clamp(1.05rem, 5vw, 1.35rem);
  letter-spacing: -0.01em;
  color: black;
  white-space: nowrap;
}

.coffeeLine {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.coffeeIcon {
  flex-shrink: 0;
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