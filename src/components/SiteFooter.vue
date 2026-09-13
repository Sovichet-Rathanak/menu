<script setup lang="ts">
</script>

<template>
  <footer class="siteFooter">
    <div class="footerContent">
      <h1 class="siteTitle">
        Every Cup <br> Made <br>With Love
      </h1>

      <div class="contactInfo">
        <a
          href="https://maps.app.goo.gl/BEnP5m3k8LjGFXf26?g_st=ic"
          target="_blank"
          rel="noopener noreferrer"
          class="contactItem"
        >
          <Iconify icon="lucide:map-pin" />
          <span>ភូមិថ្នល់ទទឹង, អង្គស្នួល <br>កណ្តាល</span>
        </a>
        <a href="tel:+85598525655" class="contactItem">
          <Iconify icon="lucide:phone" />
          <span>098 52 56 55</span>
        </a>
      </div>
    </div>
    <div class="copyright">
        © 2026 Lucky Tea & Coffee · All right reserved
    </div>
  </footer>
</template>

<style scoped>
.siteFooter {
  width: 100%;
  box-sizing: border-box;

  padding: clamp(0.75rem, 3vw, 1rem) 1.25rem;
  padding-bottom: calc(1rem + env(safe-area-inset-bottom));

  background: white;

  border-top: 1px solid #eeeeee;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.03);
}

.footerContent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.siteTitle {
  font-family: 'Climate Crisis', sans-serif;
  margin: 0;
  font-weight: 700;
  font-size: clamp(1rem, 4vw, 1.25rem);
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

.contactInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
  width: 40%;
}

.contactInfo span {
    font-family: 'Noto Sans Khmer', serif;
    font-size: .9rem;
    font-weight: 500;
}

.contactItem {
  display: flex;
  align-items: center;
  gap: 0.4rem;

  color: #333;
  text-decoration: none;

  font-family: 'Noto Sans Khmer', sans-serif;
  font-size: 0.8rem;
  line-height: 1.2;
}

.contactItem :deep(svg) {
  width: 1.2rem;
  height: 1.2rem;
  flex-shrink: 0;
}

.contactItem:hover {
  color: black;
}

.copyright {
  margin-top: 1rem;
  padding-top: 0.75rem;

  border-top: 1px solid #f0f0f0;

  text-align: center;

  font-family: 'Noto Sans Khmer', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  color: #999;
}

@media (min-width: 768px) {
  .siteFooter {
    padding: 1rem 2rem;
  }

  .siteTitle {
    font-size: 1.4rem;
  }

  .contactItem {
    font-size: 0.9rem;
  }
}
</style>