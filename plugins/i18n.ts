import { createI18n } from "vue-i18n";

import en from "../locales/en.json";
import pt from "../locales/pt.json";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    pt,
  },
});

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n);
});
