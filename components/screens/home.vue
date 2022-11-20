<script lang="ts" setup>
const languages = ref([
  {
    hint: "Português",
    value: "pt",
  },
  {
    hint: "English",
    value: "en",
  },
]);
</script>

<template>
  <h1>{{ $t("hello_world") }}</h1>

  <select v-model="$i18n.locale">
    <option v-for="(lang, index) in languages" :key="index" :value="lang.value">
      {{ lang.hint }}
    </option>
  </select>
</template>
