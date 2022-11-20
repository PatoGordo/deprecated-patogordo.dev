<template>
  <footer
    class="sm:px-[120px] sm:pt-[24px] sm:pb-[16px] px-4 pt-4 pb-4 w-screen h-42 bg-gray-700 flex flex-row sm:gap-16 gap-6 items-center justify-center"
  >
    <div class="flex flex-col items-center justify-center text-center">
      <h2
        class="flex flex-row items-center justify-start font-bold sm:text-2xl text-xl text-white mb-4 sm:gap-8 gap-4"
      >
        <img
          class="sm:w-[52px] w-[48px]"
          src="~/assets/fav-patogordo-white.png"
          alt="PatoGordo Logo"
        />
        PatoGordo
      </h2>
      <div class="flex flex-row items-center justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/icaro-miguel-0879521bb"
          target="_blank"
          rel="noopener noreferrer"
          class="sm:w-12 sm:h-12 w-10 h-10 grid place-items-center p-2 bg-white rounded-full"
        >
          <iconify-icon width="20" icon="logos:linkedin-icon"></iconify-icon>
        </a>

        <a
          href="https://t.me/PatoGordo"
          alt="Icaro Miguel Picture"
          target="_blank"
          rel="noopener noreferrer"
          class="sm:w-12 sm:h-12 w-10 h-10 grid place-items-center p-2 bg-white rounded-full"
        >
          <iconify-icon width="20" icon="logos:telegram"></iconify-icon>
        </a>

        <a
          href="https://github.com/PatoGordo"
          target="_blank"
          rel="noopener noreferrer"
          class="sm:w-12 sm:h-12 w-10 h-10 grid place-items-center p-2 bg-white text-[#24242D] rounded-full"
        >
          <iconify-icon width="20" icon="mdi:github"></iconify-icon>
        </a>

        <a
          href="mailto:conversecomicaro@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="sm:w-12 sm:h-12 w-10 h-10 grid place-items-center p-2 bg-white text-[#24242D] rounded-full"
        >
          <iconify-icon width="20" icon="dashicons:email-alt"></iconify-icon>
        </a>
      </div>
    </div>

    <div>
      <h3 class="font-medium text-xl font text-white">
        {{ $t("footer.overview") }}
      </h3>
      <div class="flex flex-col items-start justify-between">
        <a class="link" href="#home">{{ $t("footer.home") }}</a>
        <a class="link" href="#about-me">{{ $t("footer.about_me") }}</a>
        <a class="link" href="#projects">{{ $t("footer.projects") }}</a>
        <a class="link" href="#skills">{{
          $t("footer.technologies_skills")
        }}</a>
        <a class="link" href="#contact-me">{{ $t("footer.contact_me") }}</a>
      </div>
    </div>
  </footer>
</template>
