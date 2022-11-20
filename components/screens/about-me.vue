<template>
  <div
    id="about-me"
    class="w-screen h-screen flex flex-col sm:items-start items-center justify-center gap-8 bg-primary"
  >
    <div
      class="w-screen h-full sm:p-16 p-4 flex flex-col items-center justify-start gap-8"
    >
      <h2 class="text-white text-3xl font-bold">{{ $t("about.about_me") }}</h2>

      <div class="w-full flex sm:flex-row flex-col items-center justify-evenly">
        <div class="flex flex-col items-center justify-center sm:mb-0 mb-8">
          <img
            class="w-[210px] h-[210px] rounded-full"
            src="https://github.com/PatoGordo.png"
          />

          <div
            class="w-full flex flex-row items-center justify-center gap-4 mt-8"
          >
            <a
              href="https://www.linkedin.com/in/icaro-miguel-0879521bb"
              target="_blank"
              rel="noopener noreferrer"
              class="grid place-items-center p-2 bg-white rounded-full"
            >
              <iconify-icon
                width="28"
                icon="logos:linkedin-icon"
              ></iconify-icon>
            </a>

            <a
              href="https://t.me/PatoGordo"
              alt="Icaro Miguel Picture"
              target="_blank"
              rel="noopener noreferrer"
              class="grid place-items-center p-2 bg-white rounded-full"
            >
              <iconify-icon width="28" icon="logos:telegram"></iconify-icon>
            </a>

            <a
              href="mailto:conversecomicaro@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="grid place-items-center p-2 bg-white text-[#24242D] rounded-full"
            >
              <iconify-icon
                width="28"
                icon="dashicons:email-alt"
              ></iconify-icon>
            </a>
          </div>
        </div>

        <div
          class="flex flex-col items-start justify-center sm:text-xl text-lg gap-4 text-white sm:w-1/2 w-full"
        >
          <p>
            {{ $t("about.text_1") }}
          </p>
          <p>
            {{ $t("about.text_2") }}
          </p>
          <p>
            {{ $t("about.text_3") }}
          </p>
        </div>
      </div>
    </div>

    <svg
      style="width: 100%; position: absolute; bottom: -100.1%; z-index: 9999"
      viewBox="0 0 1512 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1512 32.3673C1221.86 -61.7389 383.107 71.5782 0 100H1512V32.3673Z"
        fill="#fff"
      />
    </svg>
  </div>
</template>
