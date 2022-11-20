<script lang="ts" setup>
const languages = ref([
  {
    hint: "🌐 Português",
    value: "pt",
  },
  {
    hint: "🌐 English",
    value: "en",
  },
]);
</script>

<template>
  <div
    class="w-screen h-screen sm:p-16 p-4 flex flex-col items-start justify-center gap-8"
    id="home"
  >
    <h1 class="text-3xl font-bold sm:w-1/2 w-full">
      {{ $t("home.hi_my_name_is") }}
      <span class="primary-highlight">Ícaro Miguel</span> {{ $t("home.aka") }}
      <span class="primary-highlight">PatoGordo</span>,
      {{ $t("home.im_a_fullstack_web_developer") }}.
    </h1>

    <div
      class="flex flex-row items-stretch flex-wrap sm:text-lg text-base gap-4"
    >
      <select
        v-model="$i18n.locale"
        class="btn btn-primary text-center"
        :placeholder="$t('home.change_language')"
      >
        <option
          v-for="(lang, index) in languages"
          :key="index"
          :value="lang.value"
        >
          {{ lang.hint }}
        </option>
      </select>

      <a
        href="#about-me"
        class="btn btn-primary btn-outlined sm:text-lg text-base gap-4"
      >
        {{ $t("home.know_more_about_me") }}
        <span class="h-full flex items-center justify-center mt-1">
          <iconify-icon icon="ion:chevron-down"></iconify-icon>
        </span>
      </a>
    </div>
  </div>
</template>
