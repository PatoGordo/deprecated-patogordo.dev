<script lang="ts" setup>
import "./styles/global.scss";

if (!process.server) {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    document.querySelector<HTMLDivElement>(
      "#scroll-progress-bar"
    )!.style.width = scrolled + "%";
  }
}

useHead({
  script: [
    {
      src: "https://code.iconify.design/iconify-icon/1.0.0-beta.3/iconify-icon.min.js",
    },
  ],
});
</script>

<template>
  <header>
    <div class="progress-container">
      <div class="progress-bar" id="scroll-progress-bar"></div>
    </div>
  </header>
  <screens-home />
  <screens-about-me />
  <screens-projects />
  <screens-skills />
  <screens-contact-me />
  <app-footer />
</template>

<style lang="scss" scoped>
@import "./styles/variables.scss";

header {
  position: fixed;
  top: 0;
  z-index: 10000;
  width: 100%;
}

.progress-container {
  width: 100%;
  height: 8px;
  background: #ccc;
}

.progress-bar {
  height: 8px;
  background: $secondary;
  width: 0%;
}
</style>
