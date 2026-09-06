<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue';
</script>

<template>
  <main class="appMain">
    <div class="mainContainer">
      <site-header></site-header>
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped>
.appMain {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #F4F3F3;
}

.appHeader {
  flex-shrink: 0;
  padding: 0.75rem 1rem;
  padding-top: calc(0.75rem + env(safe-area-inset-top)); 
}

.mainContainer {
  flex: 1;
  min-height: 0;      
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

@media (min-width: 768px) {
  .appMain {
    flex-direction: row;
  }

  .appHeader {
    width: 220px;
    padding-top: 0.75rem;
  }
}
</style>